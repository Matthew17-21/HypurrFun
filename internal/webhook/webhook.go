package webhook

import (
	"errors"
	"fmt"

	envutils "github.com/Matthew17-21/HypurrFun/internal/env_utils"
	launchutils "github.com/Matthew17-21/HypurrFun/internal/launch_utils"
	discordwebhook "github.com/Monumental-Shopping/go-discord-webhook"
)

// Webhook constants
const (
	webhookColor          = 271647 // Hperliquid green
	webhookTitleNewLaunch = "New hypurr.fun launch!"
	webhookUsername       = "Hypurr.fun Monitor"
	webhookAvatarURL      = "https://pbs.twimg.com/profile_images/1646991609416806408/vKLEZxhh_400x400.png"
	baseMediaURL          = "https://media.hypurr.fun/"
	baseAppURL            = "https://app.hypurr.fun/launch/"
	webhookFooter         = "Created by: `mattthew` on discord"
)

// SendNewLaunch sends a Discord webhook for a new Hypurr.fun token
func SendNewLaunch(launch *launchutils.LaunchExtended) error {
	// Ensure launch is not nil
	if launch == nil {
		return errors.New("launch is nil")
	}

	// Get webhook url
	url, err := envutils.GetValFromEnv("NEW_LAUNCHES_WEBHOOK")
	if err != nil {
		return fmt.Errorf("error getting valu from env: %w", err)
	}

	// Send webhook
	n := new(newLaunchHelper)
	n.SendWebhook(launch, url)
	return nil
}

// send is a wrapper function to send discord webhooks
func send(w discordwebhook.Webhook, url string) error {
	resp, err := w.Send(url)
	if err != nil {
		return fmt.Errorf("error sending webhook: %w", err)
	}
	defer resp.Body.Close()

	return nil
}
