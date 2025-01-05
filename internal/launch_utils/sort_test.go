package launchutils

import (
	"testing"

	"github.com/Matthew17-21/HypurrFun/pb"
	"github.com/test-go/testify/require"
)

func TestSortingFunctions(t *testing.T) {
	// Create test data
	launches := []*pb.HyperliquidLaunch{
		{
			LastEventTimestamp: 3,
			ListedTimestamp:    1,
		},
		{
			LastEventTimestamp: 1,
			ListedTimestamp:    3,
		},
		{
			LastEventTimestamp: 2,
			ListedTimestamp:    2,
		},
	}

	t.Run("SortByLastActivity", func(t *testing.T) {
		t.Run("Ascending", func(t *testing.T) {
			// Make a copy for testing
			testLaunches := make([]*pb.HyperliquidLaunch, len(launches))
			copy(testLaunches, launches)

			sorted := SortByLastActivityAsc(testLaunches)

			// Verify sorting
			require.Equal(t, int64(1), sorted[0].LastEventTimestamp)
			require.Equal(t, int64(2), sorted[1].LastEventTimestamp)
			require.Equal(t, int64(3), sorted[2].LastEventTimestamp)

			// Verify original slice was modified
			require.Equal(t, sorted, testLaunches)
		})

		t.Run("Descending", func(t *testing.T) {
			testLaunches := make([]*pb.HyperliquidLaunch, len(launches))
			copy(testLaunches, launches)

			sorted := SortByLastActivityDesc(testLaunches)

			require.Equal(t, int64(3), sorted[0].LastEventTimestamp)
			require.Equal(t, int64(2), sorted[1].LastEventTimestamp)
			require.Equal(t, int64(1), sorted[2].LastEventTimestamp)

			require.Equal(t, sorted, testLaunches)
		})
	})

	t.Run("SortByListedTimestamp", func(t *testing.T) {
		t.Run("Ascending", func(t *testing.T) {
			testLaunches := make([]*pb.HyperliquidLaunch, len(launches))
			copy(testLaunches, launches)

			sorted := SortByListedTimestampAsc(testLaunches)

			require.Equal(t, int64(1), sorted[0].ListedTimestamp)
			require.Equal(t, int64(2), sorted[1].ListedTimestamp)
			require.Equal(t, int64(3), sorted[2].ListedTimestamp)

			require.Equal(t, sorted, testLaunches)
		})

		t.Run("Descending", func(t *testing.T) {
			testLaunches := make([]*pb.HyperliquidLaunch, len(launches))
			copy(testLaunches, launches)

			sorted := SortByListedTimestampDesc(testLaunches)

			require.Equal(t, int64(3), sorted[0].ListedTimestamp)
			require.Equal(t, int64(2), sorted[1].ListedTimestamp)
			require.Equal(t, int64(1), sorted[2].ListedTimestamp)

			require.Equal(t, sorted, testLaunches)
		})
	})

	t.Run("GetSortedByLastActivity", func(t *testing.T) {
		t.Run("Ascending", func(t *testing.T) {
			original := make([]*pb.HyperliquidLaunch, len(launches))
			copy(original, launches)

			sorted := GetSortedByLastActivityAsc(original)

			// Verify sorting
			require.Equal(t, int64(1), sorted[0].LastEventTimestamp)
			require.Equal(t, int64(2), sorted[1].LastEventTimestamp)
			require.Equal(t, int64(3), sorted[2].LastEventTimestamp)

			// Verify original slice was not modified
			require.NotEqual(t, sorted, original)
			require.Equal(t, launches[0].LastEventTimestamp, original[0].LastEventTimestamp)
		})

		t.Run("Descending", func(t *testing.T) {
			original := make([]*pb.HyperliquidLaunch, len(launches))
			copy(original, launches)

			sorted := GetSortedByLastActivityDesc(original)

			require.Equal(t, int64(3), sorted[0].LastEventTimestamp)
			require.Equal(t, int64(2), sorted[1].LastEventTimestamp)
			require.Equal(t, int64(1), sorted[2].LastEventTimestamp)

			require.NotEqual(t, sorted, original)
			require.Equal(t, launches[0].LastEventTimestamp, original[0].LastEventTimestamp)
		})
	})

	t.Run("GetSortedByListedTimestamp", func(t *testing.T) {
		t.Run("Ascending", func(t *testing.T) {
			original := make([]*pb.HyperliquidLaunch, len(launches))
			copy(original, launches)

			sorted := GetSortedByListedTimestampAsc(original)

			require.Equal(t, int64(1), sorted[0].ListedTimestamp)
			require.Equal(t, int64(2), sorted[1].ListedTimestamp)
			require.Equal(t, int64(3), sorted[2].ListedTimestamp)

			require.NotEqual(t, sorted, original)
			require.Equal(t, launches[0].ListedTimestamp, original[0].ListedTimestamp)
		})

		t.Run("Descending", func(t *testing.T) {
			original := make([]*pb.HyperliquidLaunch, len(launches))
			copy(original, launches)

			sorted := GetSortedByListedTimestampDesc(original)

			require.Equal(t, int64(3), sorted[0].ListedTimestamp)
			require.Equal(t, int64(2), sorted[1].ListedTimestamp)
			require.Equal(t, int64(1), sorted[2].ListedTimestamp)

			require.NotEqual(t, sorted, original)
			require.Equal(t, launches[0].ListedTimestamp, original[0].ListedTimestamp)
		})
	})

	t.Run("Empty slice", func(t *testing.T) {
		emptyLaunches := []*pb.HyperliquidLaunch{}

		// Test all functions with empty slice
		require.Empty(t, SortByLastActivityAsc(emptyLaunches))
		require.Empty(t, SortByLastActivityDesc(emptyLaunches))
		require.Empty(t, SortByListedTimestampAsc(emptyLaunches))
		require.Empty(t, SortByListedTimestampDesc(emptyLaunches))
		require.Empty(t, GetSortedByLastActivityAsc(emptyLaunches))
		require.Empty(t, GetSortedByLastActivityDesc(emptyLaunches))
		require.Empty(t, GetSortedByListedTimestampAsc(emptyLaunches))
		require.Empty(t, GetSortedByListedTimestampDesc(emptyLaunches))
	})

	t.Run("Single element", func(t *testing.T) {
		singleLaunch := []*pb.HyperliquidLaunch{{
			LastEventTimestamp: 1,
			ListedTimestamp:    1,
		}}

		// Test all functions with single element
		sorted := SortByLastActivityAsc(singleLaunch)
		require.Len(t, sorted, 1)
		require.Equal(t, int64(1), sorted[0].LastEventTimestamp)

		sorted = GetSortedByListedTimestampDesc(singleLaunch)
		require.Len(t, sorted, 1)
		require.Equal(t, int64(1), sorted[0].ListedTimestamp)
	})
}
