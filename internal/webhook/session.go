package webhook

import (
	launchutils "github.com/Matthew17-21/HypurrFun/internal/launch_utils"
	"github.com/Matthew17-21/HypurrFun/pb"
)

const notAvailable string = "Not Available"

// getDefaultSession returns a default session when none is provided
func getDefaultSession() *pb.HyperliquidWalletDeploySession {
	return &pb.HyperliquidWalletDeploySession{
		FullName:       notAvailable,
		TokenName:      notAvailable,
		TokenSupply:    0,
		StartMarketCap: 0,
	}
}

// getSessionInfo safely extracts session information
func getSessionInfo(launch *launchutils.LaunchExtended) *pb.HyperliquidWalletDeploySession {
	if launch.Session == nil {
		return getDefaultSession()
	}
	return launch.Session
}
