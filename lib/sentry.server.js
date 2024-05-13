// sentry.server.js (using ES Modules)
import * as Sentry from '@sentry/node'; // Import Sentry
import { Integrations as SentryIntegrations } from '@sentry/tracing'; 



// Initialize Sentry
Sentry.init({
  dsn: 'https://d2b69c9fb943b8f0e9adac00b98d6efb@o4507220139245568.ingest.us.sentry.io/4507220143046656', // Replace with your Sentry DSN
  integrations: [
    new SentryIntegrations.Http({ tracing: true }), // Tracks HTTP requests
    
  ],
  tracesSampleRate: 1.0, // Adjust based on your needs
});


