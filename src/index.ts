export interface HoverBotConfig {
  chatbotId: string;
  apiKey: string;
}

declare global {
  interface Window {
    HOVERBOT_CONFIG?: HoverBotConfig;
  }
}

export function initializeHoverBot(config: HoverBotConfig) {
  if (!config.chatbotId || !config.apiKey) {
    throw new Error('HoverBot: chatbotId and apiKey are required.');
  }

  window.HOVERBOT_CONFIG = config;

  const script = document.createElement('script');
  script.src = 'https://cdn.hoverbot.ai/widget.js';
  script.async = true;
  document.head.appendChild(script);
}