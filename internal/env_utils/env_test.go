package envutils

import (
	"os"
	"strings"
	"testing"
)

func TestGetValFromEnv(t *testing.T) {
	// Test table structure for different test cases
	tests := []struct {
		name        string
		key         string
		envValue    string
		shouldExist bool
		wantErr     bool
	}{
		{
			name:        "existing environment variable",
			key:         "NEW_LAUNCHES_WEBHOOK",
			envValue:    "https://discord.webhook.url",
			shouldExist: true,
			wantErr:     false,
		},
		{
			name:        "non-existing environment variable",
			key:         "NEW_LAUNCHES_WEBHOOK",
			shouldExist: false,
			wantErr:     true,
		},
		{
			name:        "empty environment variable",
			key:         "NEW_LAUNCHES_WEBHOOK",
			envValue:    "",
			shouldExist: true,
			wantErr:     false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// Test setup
			if tt.shouldExist {
				os.Setenv(tt.key, tt.envValue)
				defer os.Unsetenv(tt.key)
			} else {
				os.Unsetenv(tt.key)
			}

			// Execute test
			got, err := GetValFromEnv(tt.key)

			// Check error condition
			if (err != nil) != tt.wantErr {
				t.Errorf("getValFromEnv() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			// For error cases, check error message contains the key
			if err != nil && !strings.Contains(err.Error(), tt.key) {
				t.Errorf("error message should contain key %q, got %q", tt.key, err.Error())
			}

			// For success cases, verify returned value
			if err == nil && got != tt.envValue {
				t.Errorf("getValFromEnv() = %v, want %v", got, tt.envValue)
			}
		})
	}
}

// TestGetValFromEnvWithSpecialCharacters tests the function with special characters in the environment variable
func TestGetValFromEnvWithSpecialCharacters(t *testing.T) {
	specialValue := "https://webhook.url?token=abc123&special=!@#$%^"
	key := "NEW_LAUNCHES_WEBHOOK"

	// Set up
	os.Setenv(key, specialValue)
	defer os.Unsetenv(key)

	// Execute
	got, err := GetValFromEnv(key)

	// Verify
	if err != nil {
		t.Errorf("getValFromEnv() unexpected error = %v", err)
	}

	if got != specialValue {
		t.Errorf("getValFromEnv() = %v, want %v", got, specialValue)
	}
}
