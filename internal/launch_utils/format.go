package launchutils

import (
	"fmt"
	"strings"
)

// FormattedSupply returns the supply in a human-readable string with metric suffixes (K, M, B, T)
func (l LaunchExtended) FormattedSupply() string {
	if l.Session == nil {
		return NotAvailble
	}
	return formatNumber(l.Session.TokenSupply)
}

// formatNumber converts a float64 number into a human-readable string with metric suffixes (K, M, B, T).
// The function automatically determines the appropriate suffix and decimal places based on the number's magnitude.
//
// NOTE:
//   - Trailing zeros after the decimal point are removed
//   - Supports negative numbers
//   - Supports suffixes up to Trillion (T)
func formatNumber(n float64) string {
	suffixes := []string{"", "K", "M", "B", "T"}
	order := 0

	// Handle negative numbers
	sign := ""
	if n < 0 {
		sign = "-"
		n = -n
	}

	// Special case for zero
	if n == 0 {
		return "0"
	}

	// Find the appropriate suffix
	for n >= 1000 && order < len(suffixes)-1 {
		n = n / 1000
		order++
	}

	// Format the number
	var result string
	switch {
	case n >= 100:
		// Numbers >= 100 show no decimal places
		result = fmt.Sprintf("%.0f", n)
	case n >= 10:
		// Numbers >= 10 show one decimal place
		result = fmt.Sprintf("%.1f", n)
		// Remove trailing zero after decimal point
		if strings.HasSuffix(result, ".0") {
			result = strings.TrimSuffix(result, ".0")
		}
	default:
		// Numbers < 10 show up to two decimal places
		result = fmt.Sprintf("%.2f", n)
		// Remove trailing zeros after decimal point
		result = strings.TrimRight(strings.TrimRight(result, "0"), ".")
	}

	return sign + result + suffixes[order]
}
