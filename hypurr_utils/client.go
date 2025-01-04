package hypurrutils

import (
	"fmt"

	"github.com/Matthew17-21/HypurrFun/pb"
)

// NewStaticClient creates a new gRPC client to communicate with Hypurr.fun's static servers
func NewStaticClient(userAgent string) (pb.StaticClient, error) {
	conn, err := createGRPCConnection(userAgent)
	if err != nil {
		return nil, fmt.Errorf("createGRPCConnection error: %w", err)
	}
	return pb.NewStaticClient(conn), nil
}

// NewTelegramClient creates a new gRPC client to communicate with Hypurr.fun's telegram servers
func NewTelegramClient(userAgent string) (pb.TelegramClient, error) {
	conn, err := createGRPCConnection(userAgent)
	if err != nil {
		return nil, fmt.Errorf("createGRPCConnection error: %w", err)
	}
	return pb.NewTelegramClient(conn), nil
}
