import '@testing-library/jest-dom';

// Mocking environment variables
process.env.VITE_API_KEY = 'test-api-key';
process.env.VITE_AUTH_DOMAIN = 'test-auth-domain';
process.env.VITE_PROJECT_ID = 'test-project-id';
process.env.VITE_STORAGE_BUCKET = 'test-storage-bucket';
process.env.VITE_MESSAGING_SENDER_ID = 'test-messaging-sender-id';
process.env.VITE_APP_ID = 'test-app-id';
process.env.VITE_MEASUREMENT_ID = 'test-measurement-id';