# HoverBot Chatbot Client

A lightweight, customizable chatbot widget client for the HoverBot platform. This package provides the core functionality for integrating HoverBot's chatbot capabilities into any web application.

## Features

- Easy integration with any web application
- TypeScript support
- Lightweight and performant
- Customizable widget interface
- Real-time chat capabilities

## Installation

```bash
npm install hoverbot-chatbot-client
```

## Usage

```typescript
import { initializeHoverBot } from 'hoverbot-chatbot-client';

// Initialize the chatbot
initializeHoverBot({
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key'
});
```

## Configuration

The client requires two configuration options:

```typescript
interface HoverBotConfig {
  // Required: Your unique chatbot ID
  chatbotId: string;
  
  // Required: Your API key for authentication
  apiKey: string;
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact the HoverBot team or open an issue in the repository.
