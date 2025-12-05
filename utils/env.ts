
/**
 * Universal Environment Loader
 * Handles resolution for Vite, Node/Process, and Runtime injection.
 */

export interface AppConfig {
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
  functionsBaseUrl: string;
  geminiApiKey: string;
  isDev: boolean;
  isMock: boolean;
}

// Helper to safely get env vars from various sources
const getEnvVar = (key: string): string | undefined => {
  // 1. Vite / Modern Frontend Build
  try {
    if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
      return (import.meta as any).env[key];
    }
  } catch (e) {
    // Ignore error
  }
  
  // 2. Node.js / Process (SSR or Test)
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env[key];
    }
  } catch (e) {
    // Ignore error
  }

  // 3. Window Injection (Runtime / Docker)
  try {
    if (typeof window !== 'undefined' && (window as any).__ENV__) {
      return (window as any).__ENV__[key];
    }
  } catch (e) {
    // Ignore error
  }
  
  return undefined;
};

const RAW_CONFIG = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY'),
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('VITE_FIREBASE_APP_ID'),
  functionsUrl: getEnvVar('VITE_FUNCTIONS_BASE_URL'),
  geminiKey: getEnvVar('VITE_GEMINI_API_KEY'),
};

// Heuristic to check if we have real keys or should fallback to mock
const hasKeys = !!RAW_CONFIG.apiKey && !!RAW_CONFIG.projectId;

export const env: AppConfig = {
  firebase: {
    apiKey: RAW_CONFIG.apiKey || 'mock-api-key',
    authDomain: RAW_CONFIG.authDomain || 'mock-project.firebaseapp.com',
    projectId: RAW_CONFIG.projectId || 'mock-project',
    storageBucket: RAW_CONFIG.storageBucket || 'mock-project.appspot.com',
    messagingSenderId: RAW_CONFIG.messagingSenderId || '00000000000',
    appId: RAW_CONFIG.appId || '1:00000000000:web:00000000000000',
  },
  // If no URL provided, guess the default Firebase emulator/cloud format based on project ID
  functionsBaseUrl: RAW_CONFIG.functionsUrl || 
    (RAW_CONFIG.projectId 
      ? `https://us-central1-${RAW_CONFIG.projectId}.cloudfunctions.net` 
      : 'http://localhost:5001/mock-project/us-central1'),
      
  geminiApiKey: RAW_CONFIG.geminiKey || '',
  
  isDev: getEnvVar('NODE_ENV') === 'development',
  isMock: !hasKeys,
};

// Debug log to help verify what's loaded
if (typeof window !== 'undefined') {
  console.log('[Studio C] Environment Loaded:', {
    mode: env.isMock ? 'MOCK (Missing Keys)' : 'LIVE',
    projectId: env.firebase.projectId,
    functions: env.functionsBaseUrl
  });
}
