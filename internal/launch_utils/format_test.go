package launchutils

import (
	"testing"

	"github.com/Matthew17-21/HypurrFun/pb"
	"github.com/test-go/testify/require"
)

func TestLaunchExtended_FormattedSupply(t *testing.T) {
	tests := []struct {
		name     string
		launch   LaunchExtended
		expected string
	}{
		{
			name:     "nil session",
			launch:   LaunchExtended{HyperliquidLaunch: &pb.HyperliquidLaunch{}},
			expected: "Not Available",
		},
		{
			name: "zero supply",
			launch: LaunchExtended{HyperliquidLaunch: &pb.HyperliquidLaunch{
				Session: &pb.HyperliquidWalletDeploySession{
					TokenSupply: 0,
				},
			}},
			expected: "0",
		},
		{
			name: "regular number",
			launch: LaunchExtended{HyperliquidLaunch: &pb.HyperliquidLaunch{
				Session: &pb.HyperliquidWalletDeploySession{
					TokenSupply: 1234567,
				},
			}},
			expected: "1.23M",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := tt.launch.FormattedSupply()
			if got != tt.expected {
				t.Errorf("FormattedSupply() = %v, want %v", got, tt.expected)
			}
		})
	}
}

func Test_formatNumber(t *testing.T) {
	tests := []struct {
		name     string
		number   float64
		expected string
	}{
		// Zero and small numbers
		{"zero", 0, "0"},
		{"small decimal", 0.123, "0.12"},
		{"one decimal", 1.23, "1.23"},
		{"nine point nine", 9.9, "9.9"},

		// Numbers >= 10 (one decimal place)
		{"ten", 10, "10"},
		{"twelve point three four", 12.34, "12.3"},
		{"ninety nine point nine", 99.9, "99.9"},

		// Numbers >= 100 (no decimal places)
		{"hundred", 100, "100"},
		{"hundred point five", 100.5, "100"},
		{"nine hundred ninety nine", 999, "999"},

		// Thousands (K)
		{"one thousand", 1000, "1K"},
		{"one point two thousand", 1200, "1.2K"},
		{"hundred thousand", 100000, "100K"},
		{"nine hundred ninety nine thousand", 999999, "1000K"},

		// Millions (M)
		{"one million", 1000000, "1M"},
		{"one point two million", 1200000, "1.2M"},
		{"hundred million", 100000000, "100M"},

		// Billions (B)
		{"one billion", 1000000000, "1B"},
		{"one point two billion", 1200000000, "1.2B"},
		{"hundred billion", 100000000000, "100B"},

		// Trillions (T)
		{"one trillion", 1000000000000, "1T"},
		{"one point two trillion", 1200000000000, "1.2T"},
		{"hundred trillion", 100000000000000, "100T"},

		// Negative numbers
		{"negative small", -1.23, "-1.23"},
		{"negative thousand", -1000, "-1K"},
		{"negative million", -1000000, "-1M"},
		{"negative billion", -1000000000, "-1B"},
		{"negative trillion", -1000000000000, "-1T"},

		// Edge cases
		{"1e+03", 1e+03, "1K"},
		{"1e+04", 1e+04, "10K"},
		{"1e+05", 1e+05, "100K"},
		{"1e+06", 1e+06, "1M"},
		{"1e+07", 1e+07, "10M"},
		{"1e+08", 1e+08, "100M"},
		{"1e+09", 1e+09, "1B"},
		{"just under thousand", 999.9, "1000"},
		{"just under million", 999999.9, "1000K"},
		{"just under billion", 999999999.9, "1000M"},
		{"just under trillion", 999999999999.9, "1000B"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := formatNumber(tt.number)
			require.Equal(t, tt.expected, got)
		})
	}
}
