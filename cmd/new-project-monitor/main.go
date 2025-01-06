package main

import (
	"context"
	"io"
	"log"
	"time"

	hypurrutils "github.com/Matthew17-21/HypurrFun/hypurr_utils"
	launchutils "github.com/Matthew17-21/HypurrFun/internal/launch_utils"
	"github.com/Matthew17-21/HypurrFun/internal/webhook"
	"github.com/Matthew17-21/HypurrFun/pb"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
)

const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"

const (
	errorDelay = 1500 * time.Millisecond
)

func main() {
	// Initialize app
	initialize()

	// Create a new client
	client, err := hypurrutils.NewStaticClient(userAgent)
	if err != nil {
		log.Fatalln(err)
	}

	// Create new context
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Monitor for new projects
	monitorNewLaunches(ctx, client)
}

// initialize sets up the application environment, such as loading `.env` variables.
func initialize() {
	log.Println("Initializing application...")

	// Attempt to load environment variables from a `.env` file.
	// If the file is missing or cannot be read, log a warning and proceed.
	if err := godotenv.Load(); err != nil {
		log.Printf("WARNING: Failed to load environment variables from .env file: %v", err)
	}
}

func monitorNewLaunches(ctx context.Context, client pb.StaticClient) {
	log.Println("Monitoring for new Hypurr.fun launches...")

	// Create a function to establish the stream
	establishStream := func() (grpc.ServerStreamingClient[pb.HyperliquidLaunchStreamResponse], error) {
		return client.HyperliquidLaunchStream(ctx, &pb.HyperliquidLaunchStreamRequest{})
	}

	// Create the stream
	launchesStream, err := establishStream()
	if err != nil {
		log.Fatalln("error with stream:", err)
	}

	// Define a var to reference when getting new coins
	// No need to have an array of launches, we only need to keep track of the lastest one
	var latestCoin *launchutils.LaunchExtended

	// Listen to for new events
	for {
		resp, err := launchesStream.Recv()
		if err != nil {
			// Check to see if stream is closed
			if err == io.EOF {
				log.Println("Stream is closed.")
				return
			}
			log.Println("Error receiving message from stream:", err)
			launchesStream.CloseSend()
			time.Sleep(errorDelay)

			// Attempt to reestablish the stream
			launchesStream, err = establishStream()
			if err != nil {
				log.Fatalln("error with stream:", err)
			}
			continue
		}

		// The first response message from the stream will be a list of tokens sorted by latest activity
		// Update our initial array to to that
		if latestCoin == nil {
			// Sort by listed timestamp in descending order (most recent first)
			tmp := launchutils.SortByListedTimestampDesc(resp.Launches)
			if len(tmp) == 0 {
				continue
			}
			log.Printf("Received initial launch list with %d launches\n", len(tmp))

			// Get the first coin (latest one) and set it as the latest
			latestCoin = launchutils.ToLaunchExtended(tmp[0])
			continue
		}

		// For subsequent messages, if the listed timestamp is newer than the first element, add to array & send webhook
		for _, launch := range resp.Launches {
			// Filter out launches that are either:
			//  - Duplicates (same ID as an existing launch)
			//  - Or out of chronological order (earlier timestamp than what we already have)
			coin := launchutils.ToLaunchExtended(launch)
			if shouldSkipLaunch(coin, latestCoin) {
				continue
			}
			log.Printf("New launch detected: %+v\n", launch)

			// Send webhook
			webhook.SendNewLaunch(coin)

			// Update the latest coin
			latestCoin = coin
		}
	}
}

func shouldSkipLaunch(coin, latestCoin *launchutils.LaunchExtended) bool {
	return coin == nil ||
		latestCoin == nil ||
		coin.Id == latestCoin.Id ||
		coin.LaunchTime.Before(latestCoin.LaunchTime)
}
