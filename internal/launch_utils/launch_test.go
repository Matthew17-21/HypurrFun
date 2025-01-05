package launchutils

import (
	"testing"
	"time"

	"github.com/Matthew17-21/HypurrFun/pb"
	"github.com/test-go/testify/require"
)

func TestToLaunchExtended(t *testing.T) {
	tests := []struct {
		name         string
		input        *pb.HyperliquidLaunch
		expectedTime time.Time
	}{
		{
			name: "converts zero timestamp",
			input: &pb.HyperliquidLaunch{
				ListedTimestamp: 0,
			},
			expectedTime: time.Unix(0, 0).Local(),
		},
		{
			name: "converts set timestamp",
			input: &pb.HyperliquidLaunch{
				ListedTimestamp: 1641024000000, // Saturday, January 1, 2022 8:00:00 UTC
			},
			expectedTime: time.Date(2022, time.January, 1, 8, 0, 0, 0, time.UTC).UTC(),
		},
	}

	t.Run("handles non nil input", func(t *testing.T) {
		for _, tt := range tests {
			t.Run(tt.name, func(t *testing.T) {
				// Run tests
				got := ToLaunchExtended(tt.input)

				// Assert
				require.NotNil(t, got)
				require.Equal(t, tt.input, got.HyperliquidLaunch, "original Launch struct should be preserved")
				require.Equal(t, tt.expectedTime.UTC(), got.LaunchTime.UTC(), "LaunchTime should be correctly converted")
			})
		}
	})

	t.Run("handles nil input", func(t *testing.T) {
		// Run test
		got := ToLaunchExtended(nil)

		// Assert
		expectedTime := time.Time{}
		require.NotNil(t, got)
		require.Nil(t, got.HyperliquidLaunch)
		require.Equal(t, expectedTime, got.LaunchTime)
	})
}

func TestUnixMillisecondsToTime(t *testing.T) {
	tests := []struct {
		name     string
		input    int64
		expected time.Time
	}{
		{
			name:     "Epoch time",
			input:    0,
			expected: time.Unix(0, 0).UTC(),
		},
		{
			name:     "Epoch time UnixMilli",
			input:    time.Time{}.UnixMilli(),
			expected: time.Time{}.UTC(),
		},
		{
			name:     "Non-zero milliseconds",
			input:    1672531199000, // Saturday, December 31, 2022 23:59:59
			expected: time.Date(2022, time.December, 31, 23, 59, 59, 0, time.UTC).UTC(),
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := unixMilliToTime(tt.input)
			require.Equal(t, tt.expected.UTC(), result.UTC())
		})
	}
}
