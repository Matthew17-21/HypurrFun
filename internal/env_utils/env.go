package envutils

import (
	"fmt"
	"os"
)

// getValFromEnv retrieves a value from environment variables by its key.
// It returns the value if found, or an error if the environment variable is not set.
//
// Parameters:
//   - key: The name of the environment variable to retrieve
//
// Returns:
//   - string: The value of the environment variable if found
//   - error: An error if the environment variable is not set
func GetValFromEnv(key string) (string, error) {
	url, exists := os.LookupEnv(key)
	if !exists {
		return "", fmt.Errorf("no webhook found in the %q env var", key)
	}
	return url, nil
}
