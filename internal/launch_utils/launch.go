package launchutils

import (
	"time"

	"github.com/Matthew17-21/HypurrFun/pb"
)

// LaunchExtended extends the protobuf HyperliquidLaunch message with additional computed fields
type LaunchExtended struct {
	*pb.HyperliquidLaunch
	LaunchTime time.Time // Time the token was launched
}

// ToLaunchExtended converts a protobuf HyperliquidLaunch message to an extended launch struct
// It handles the conversion of the Unix millisecond timestamp to a time.Time object
func ToLaunchExtended(hl *pb.HyperliquidLaunch) *LaunchExtended {
	if hl == nil {
		return &LaunchExtended{
			HyperliquidLaunch: nil,
			LaunchTime:        time.Time{}, // Zero value for time.Time
		}
	}

	return &LaunchExtended{
		HyperliquidLaunch: hl,
		LaunchTime:        unixMilliToTime(hl.ListedTimestamp),
	}
}

// UnixMilliToTime converts Unix milliseconds timestamp to time.Time
func unixMilliToTime(msTimestamp int64) time.Time {
	return time.UnixMilli(msTimestamp) //.UTC()
}
