package launchutils

import (
	"testing"
	"time"

	"github.com/Matthew17-21/HypurrFun/pb"
	"github.com/test-go/testify/require"
)
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
