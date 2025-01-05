package webhook

import (
	"fmt"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

// Test timestamp formatting
func TestFormatTimestamp(t *testing.T) {
	helper := newLaunchHelper{}

	t.Run("formats current time correctly", func(t *testing.T) {
		now := time.Now()
		formatted := helper.formatTimestamp(now)
		expected := fmt.Sprintf("<t:%d:f> (<t:%d:R>)", now.Unix(), now.Unix())
		assert.Equal(t, expected, formatted, "Current timestamp should be formatted correctly")
	})

	t.Run("formats specific date correctly", func(t *testing.T) {
		// Use a specific date for consistent testing
		specificDate := time.Date(2024, 1, 1, 12, 0, 0, 0, time.UTC)
		formatted := helper.formatTimestamp(specificDate)
		expected := fmt.Sprintf("<t:%d:f> (<t:%d:R>)", specificDate.Unix(), specificDate.Unix())
		assert.Equal(t, expected, formatted, "Specific date should be formatted correctly")
	})

	t.Run("formats zero time correctly", func(t *testing.T) {
		zeroTime := time.Time{}
		formatted := helper.formatTimestamp(zeroTime)
		expected := fmt.Sprintf("<t:%d:f> (<t:%d:R>)", zeroTime.Unix(), zeroTime.Unix())
		assert.Equal(t, expected, formatted, "Zero time should be formatted without error")
	})
}

// Test token name formatting
func TestFormatTokenName(t *testing.T) {
	helper := newLaunchHelper{}

	t.Run("formats normal token name and full name", func(t *testing.T) {
		fullName := "Test Token"
		tokenName := "TEST"
		formatted := helper.formatTokenName(fullName, tokenName)
		expected := "Test Token ($TEST)"
		assert.Equal(t, expected, formatted, "Token name and full name should be formatted correctly")
	})

	t.Run("handles not available token name", func(t *testing.T) {
		fullName := "Test Token"
		formatted := helper.formatTokenName(fullName, notAvailable)
		assert.Equal(t, fullName, formatted, "Should return only full name when token is not available")
	})

	t.Run("handles empty strings", func(t *testing.T) {
		formatted := helper.formatTokenName("", "")
		assert.Equal(t, " ($)", formatted, "Should handle empty strings without error")
	})

	t.Run("handles special characters", func(t *testing.T) {
		fullName := "Test & Token!"
		tokenName := "T&T"
		formatted := helper.formatTokenName(fullName, tokenName)
		expected := "Test & Token! ($T&T)"
		assert.Equal(t, expected, formatted, "Should handle special characters correctly")
	})

	t.Run("handles unicode characters", func(t *testing.T) {
		fullName := "Token 币"
		tokenName := "币"
		formatted := helper.formatTokenName(fullName, tokenName)
		expected := "Token 币 ($币)"
		assert.Equal(t, expected, formatted, "Should handle unicode characters correctly")
	})
}
