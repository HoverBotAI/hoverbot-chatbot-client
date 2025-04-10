# HoverBot Chatbot Client

A lightweight chatbot widget client for the HoverBot platform. This package provides the core functionality for integrating HoverBot's chatbot capabilities into any web application.

## Features

- Easy integration with any web application
- TypeScript support
- Lightweight and performant
- Customizable widget interface
- Real-time chat capabilities

## Installation

```bash
npm install @hoverbot/chatbot-client
```

## Usage

```typescript
import { initializeHoverBot } from '@hoverbot/chatbot-client';

// Initialize the chatbot
initializeHoverBot({
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key'
});
```

## Framework-specific Examples

### React

```typescript
// App.tsx or your main component
import { useEffect } from 'react';
import { initializeHoverBot } from '@hoverbot/chatbot-client';

function App() {
  useEffect(() => {
    initializeHoverBot({
      chatbotId: 'your-chatbot-id',
      apiKey: 'your-api-key'
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {/* Your app content */}
    </div>
  );
}

export default App;
```

### Angular

```typescript
// main.ts
import { initializeHoverBot } from '@hoverbot/chatbot-client';

initializeHoverBot({
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key'
});

// Your existing main.ts content
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

### Vue

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { initializeHoverBot } from '@hoverbot/chatbot-client';

// Initialize the chatbot
initializeHoverBot({
  chatbotId: 'your-chatbot-id',
  apiKey: 'your-api-key'
});

// Create and mount the Vue app
createApp(App).mount('#app')
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
