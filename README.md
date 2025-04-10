# HoverBot Chatbot Client

A lightweight client for integrating HoverBot chatbots into your web applications.

## Installation

```bash
npm install hoverbot-chatbot-client
# or
yarn add hoverbot-chatbot-client
```

## Configuration

You can configure HoverBot by providing a configuration object:

```typescript
import { initializeHoverBot } from 'hoverbot-chatbot-client';

initializeHoverBot({
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key',
});
```

## Usage

```typescript
import { initializeHoverBot } from 'hoverbot-chatbot-client';

// Initialize with configuration
initializeHoverBot({
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key'
});
```

## TypeScript Support

The package includes TypeScript type definitions:

```typescript
import { HoverBotConfig } from 'hoverbot-chatbot-client';

const config: HoverBotConfig = {
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key'
};
```

## License

MIT
