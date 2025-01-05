package webhook

import (
	"testing"

	launchutils "github.com/Matthew17-21/HypurrFun/internal/launch_utils"
	"github.com/Matthew17-21/HypurrFun/pb"
	"github.com/stretchr/testify/require"
)

func TestGetDefaultSession(t *testing.T) {
	// Test the default session creation
	session := getDefaultSession()
	const expectedTokenSupply float64 = 0
	const expectedMarketCap int32 = 0
	const exptectedTokenName string = notAvailable
	const exptectedFullName string = notAvailable

	// Verify all default values are set correctly
	require.Equal(t, exptectedFullName, session.FullName, "Default FullName should be 'Not available'")
	require.Equal(t, exptectedTokenName, session.TokenName, "Default TokenName should be '?'")
	require.Equal(t, expectedTokenSupply, session.TokenSupply, "Default TokenSupply should be 0")
	require.Equal(t, expectedMarketCap, session.StartMarketCap, "Default StartMarketCap should be 0")
}

func TestGetSessionInfo(t *testing.T) {
	t.Run("nil session returns default", func(t *testing.T) {
		// Create a launch with nil session
		launch := &launchutils.LaunchExtended{
			HyperliquidLaunch: &pb.HyperliquidLaunch{
				Session: nil,
			},
		}
		const expectedTokenSupply float64 = 0
		const expectedMarketCap int32 = 0
		const exptectedTokenName string = notAvailable
		const exptectedFullName string = notAvailable

		session := getSessionInfo(launch)

		// Verify default values are returned
		require.Equal(t, exptectedFullName, session.FullName)
		require.Equal(t, exptectedTokenName, session.TokenName)
		require.Equal(t, expectedTokenSupply, session.TokenSupply)
		require.Equal(t, expectedMarketCap, session.StartMarketCap)
	})

	t.Run("valid session returns correct values", func(t *testing.T) {
		// Create a launch with custom session values
		customSession := &pb.HyperliquidWalletDeploySession{
			FullName:       "Test Token",
			TokenName:      "TST",
			TokenSupply:    1000000,
			StartMarketCap: 5000000,
		}
		launch := &launchutils.LaunchExtended{
			HyperliquidLaunch: &pb.HyperliquidLaunch{
				Session: customSession,
			},
		}
		const expectedTokenSupply float64 = 1000000
		const expectedMarketCap int32 = 5000000
		const exptectedTokenName string = "TST"
		const exptectedFullName string = "Test Token"

		session := getSessionInfo(launch)

		// Verify custom values are returned
		require.Equal(t, exptectedFullName, session.FullName)
		require.Equal(t, exptectedTokenName, session.TokenName)
		require.Equal(t, expectedTokenSupply, session.TokenSupply)
		require.Equal(t, expectedMarketCap, session.StartMarketCap)
	})
}

func TestGetSessionInfoEdgeCases(t *testing.T) {
	t.Run("empty session values", func(t *testing.T) {
		// Test with empty string values but non-nil session
		emptySession := &pb.HyperliquidWalletDeploySession{
			FullName:       "",
			TokenName:      "",
			TokenSupply:    0,
			StartMarketCap: 0,
		}

		launch := &launchutils.LaunchExtended{
			HyperliquidLaunch: &pb.HyperliquidLaunch{
				Session: emptySession,
			},
		}
		const expectedTokenSupply float64 = 0
		const expectedMarketCap int32 = 0
		const exptectedTokenName string = ""
		const exptectedFullName string = ""

		session := getSessionInfo(launch)

		// Verify empty values are preserved (not converted to defaults)
		require.Equal(t, exptectedFullName, session.FullName)
		require.Equal(t, exptectedTokenName, session.TokenName)
		require.Equal(t, expectedTokenSupply, session.TokenSupply)
		require.Equal(t, expectedMarketCap, session.StartMarketCap)
	})
}
