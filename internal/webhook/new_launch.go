package webhook

import (
	"errors"
	"fmt"
	"strconv"
	"time"

	launchutils "github.com/Matthew17-21/HypurrFun/internal/launch_utils"
	"github.com/Matthew17-21/HypurrFun/pb"
	discordwebhook "github.com/Monumental-Shopping/go-discord-webhook"
)

type newLaunchHelper struct{}

// formatTimestamp formats Unix timestamp for Discord display
func (newLaunchHelper) formatTimestamp(listed time.Time) string {
	ts := listed.Unix()
	return fmt.Sprintf("<t:%d:f> (<t:%d:R>)", ts, ts)
}

// formatTokenName formats the token name display
func (newLaunchHelper) formatTokenName(fullName, tokenName string) string {
	if tokenName == notAvailable {
		return fullName
	}
	return fmt.Sprintf("%s ($%s)", fullName, tokenName)
}

// setupWebhookBase configures the basic webhook properties
func (newLaunchHelper) setupWebhookBase(w discordwebhook.Webhook, launch *launchutils.LaunchExtended, config WebhookConfig) {
	w.SetColor(config.Color)
	w.SetTimestamp(time.Unix(0, launch.ListedTimestamp*int64(time.Millisecond)))
	w.SetThumbnail(config.MediaURL + launch.MediaFileId)
	w.SetTitle(config.Title)
	w.SetUrl(config.BaseAppURL + strconv.Itoa(int(launch.Id)))
	w.SetUsername(config.Username)
	w.SetAvatarUrl(config.AvatarURL)
	w.CreateFooter(config.Footer, "")
}

// addSessionFields adds session-specific fields to the webhook
func (n newLaunchHelper) addSessionFields(w discordwebhook.Webhook, l *launchutils.LaunchExtended, session *pb.HyperliquidWalletDeploySession) {
	w.CreateField("Name", n.formatTokenName(session.FullName, session.TokenName), true)
	w.CreateField("Supply", l.FormattedSupply(), true)
	w.CreateField("Market Cap", strconv.FormatInt(int64(session.StartMarketCap), 10), true)
}

// addLaunchFields adds launch-specific fields to the webhook
func (n newLaunchHelper) addLaunchFields(w discordwebhook.Webhook, launch *launchutils.LaunchExtended) {
	w.CreateField("Description", launch.Description, false)
	w.CreateField("Created At", n.formatTimestamp(launch.LaunchTime), true)
	if launch.TelegramUser != nil {
		w.CreateField("Created by", launch.TelegramUser.Username, true)
	}
}

// SendWebhook sends a Discord webhook for a HyperliquidLaunch
func (n newLaunchHelper) SendWebhook(launch *launchutils.LaunchExtended, url string) error {
	// Make sure launch is not nil
	if launch == nil {
		return errors.New("hyperliquidLaunch is nil")
	}

	// Create a new webhook
	webhook := discordwebhook.NewWebhook()
	config := newLaunchConfig()

	// Setup webhook with base configuration
	n.setupWebhookBase(webhook, launch, config)

	// Add session information
	sessionInfo := getSessionInfo(launch)
	n.addSessionFields(webhook, launch, sessionInfo)

	// Add launch-specific information
	n.addLaunchFields(webhook, launch)

	// Send
	return send(webhook, url)
}
