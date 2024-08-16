
const isJestEnvironment = process.env.NODE_ENV === 'test';

export const config = {
  apiKey: process.env.VITE_API_KEY || (isJestEnvironment ? 'test-api-key' : ''),
  authDomain: process.env.VITE_AUTH_DOMAIN || (isJestEnvironment ? 'test-auth-domain' : ''),
  projectId: process.env.VITE_PROJECT_ID || (isJestEnvironment ? 'test-project-id' : ''),
  storageBucket: process.env.VITE_STORAGE_BUCKET || (isJestEnvironment ? 'test-storage-bucket' : ''),
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID || (isJestEnvironment ? 'test-messaging-sender-id' : ''),
  appId: process.env.VITE_APP_ID || (isJestEnvironment ? 'test-app-id' : ''),
  measurementId: process.env.VITE_MEASUREMENT_ID || (isJestEnvironment ? 'test-measurement-id' : ''),
};
