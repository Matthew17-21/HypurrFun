package hypurrutils

import (
	"fmt"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

const (
	serverAddress    = "grpc.hypurr.fun:443"
	maxMessageSizeMB = 50
	maxMessageSizeB  = 1024 * 1024 * maxMessageSizeMB
)

// createGRPCConnection establishes a new gRPC connection with common configuration
func createGRPCConnection(userAgent string) (*grpc.ClientConn, error) {
	// Set up TLS credentials
	creds := credentials.NewClientTLSFromCert(nil, "") // nil uses the system's root CA pool

	// Create connection
	conn, err := grpc.NewClient(
		serverAddress,
		grpc.WithUserAgent(userAgent),
		grpc.WithTransportCredentials(creds),
		grpc.WithDefaultCallOptions(grpc.MaxCallRecvMsgSize(maxMessageSizeB)),
	)
	if err != nil {
		return nil, fmt.Errorf("error creating new client: %w", err)
	}
	return conn, nil
}
