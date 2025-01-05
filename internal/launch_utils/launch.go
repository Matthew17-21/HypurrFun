package launchutils

import (
	"time"

	"github.com/Matthew17-21/HypurrFun/pb"
)

const NotAvailble = "Not Available"

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

// LaunchSlice represents a slice of HyperliquidLaunch pointers that can be sorted.
// It implements the basic methods required by sort.Interface.
type LaunchSlice []*pb.HyperliquidLaunch

// Len returns the length of the LaunchSlice.
// This is part of sort.Interface implementation.
func (l LaunchSlice) Len() int { return len(l) }

// Swap exchanges the elements with indexes i and j.
// This is part of sort.Interface implementation.
func (l LaunchSlice) Swap(i, j int) { l[i], l[j] = l[j], l[i] }

// SortByLastActivity is a wrapper around LaunchSlice that implements
// sort.Interface to sort launches by their LastEventTimestamp in ascending order
// (oldest first).
type SortByLastActivity struct{ LaunchSlice }

// Less reports whether the launch at index i should sort before the launch at index j.
// It compares LastEventTimestamp values in ascending order.
// This is part of sort.Interface implementation.
func (s SortByLastActivity) Less(i, j int) bool {
	return s.LaunchSlice[i].LastEventTimestamp < s.LaunchSlice[j].LastEventTimestamp
}

// SortByListedTimestamp is a wrapper around LaunchSlice that implements
// sort.Interface to sort launches by their ListedTimestamp in ascending order
// (oldest first).
type SortByListedTimestamp struct{ LaunchSlice }

// Less reports whether the launch at index i should sort before the launch at index j.
// It compares ListedTimestamp values in ascending order.
// This is part of sort.Interface implementation.
func (s SortByListedTimestamp) Less(i, j int) bool {
	return s.LaunchSlice[i].ListedTimestamp < s.LaunchSlice[j].ListedTimestamp
}

// UnixMilliToTime converts Unix milliseconds timestamp to time.Time
func unixMilliToTime(msTimestamp int64) time.Time {
	return time.UnixMilli(msTimestamp) //.UTC()
}
