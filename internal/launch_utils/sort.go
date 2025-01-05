package launchutils

import (
	"sort"

	"github.com/Matthew17-21/HypurrFun/pb"
)

// SortByLastActivityAsc sorts the given launches by LastEventTimestamp in ascending order
// and returns the sorted slice. The original slice is modified.
func SortByLastActivityAsc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sort.Sort(SortByLastActivity{LaunchSlice(launches)})
	return launches
}

// SortByLastActivityDesc sorts the given launches by LastEventTimestamp in descending order
// and returns the sorted slice. The original slice is modified.
func SortByLastActivityDesc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sort.Sort(sort.Reverse(SortByLastActivity{LaunchSlice(launches)}))
	return launches
}

// SortByListedTimestampAsc sorts the given launches by ListedTimestamp in ascending order
// and returns the sorted slice. The original slice is modified.
func SortByListedTimestampAsc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sort.Sort(SortByListedTimestamp{LaunchSlice(launches)})
	return launches
}

// SortByListedTimestampDesc sorts the given launches by ListedTimestamp in descending order
// and returns the sorted slice. The original slice is modified.
func SortByListedTimestampDesc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sort.Sort(sort.Reverse(SortByListedTimestamp{LaunchSlice(launches)}))
	return launches
}

// GetSortedByLastActivityAsc returns a new slice containing the launches sorted
// by LastEventTimestamp in ascending order. The original slice is not modified.
func GetSortedByLastActivityAsc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sorted := make([]*pb.HyperliquidLaunch, len(launches))
	copy(sorted, launches)
	return SortByLastActivityAsc(sorted)
}

// GetSortedByLastActivityDesc returns a new slice containing the launches sorted
// by LastEventTimestamp in descending order. The original slice is not modified.
func GetSortedByLastActivityDesc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sorted := make([]*pb.HyperliquidLaunch, len(launches))
	copy(sorted, launches)
	return SortByLastActivityDesc(sorted)
}

// GetSortedByListedTimestampAsc returns a new slice containing the launches sorted
// by ListedTimestamp in ascending order. The original slice is not modified.
func GetSortedByListedTimestampAsc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sorted := make([]*pb.HyperliquidLaunch, len(launches))
	copy(sorted, launches)
	return SortByListedTimestampAsc(sorted)
}

// GetSortedByListedTimestampDesc returns a new slice containing the launches sorted
// by ListedTimestamp in descending order. The original slice is not modified.
func GetSortedByListedTimestampDesc(launches []*pb.HyperliquidLaunch) []*pb.HyperliquidLaunch {
	sorted := make([]*pb.HyperliquidLaunch, len(launches))
	copy(sorted, launches)
	return SortByListedTimestampDesc(sorted)
}
