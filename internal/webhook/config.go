package webhook

// WebhookConfig holds the configuration for Discord webhooks
type WebhookConfig struct {
	Color      int
	Title      string
	Username   string
	AvatarURL  string
	Footer     string
	BaseAppURL string
	MediaURL   string
}

func newLaunchConfig() WebhookConfig {
	return WebhookConfig{
		Color:      webhookColor,
		Title:      webhookTitleNewLaunch,
		Username:   webhookUsername,
		AvatarURL:  webhookAvatarURL,
		Footer:     webhookFooter,
		BaseAppURL: baseAppURL,
		MediaURL:   baseMediaURL,
	}
}
