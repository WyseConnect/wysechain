
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Render the React app
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// PWA offline fallback message
window.addEventListener('offline', () => {
  console.log('App is now offline');
  // You could show a toast notification here
});

window.addEventListener('online', () => {
  console.log('App is now online');
  // You could show a toast notification here
});

// iOS PWA detection (helps with styling when running as PWA on iOS)
// Safely check if the standalone property exists
if ('navigator' in window && 'standalone' in window.navigator && (window.navigator as any).standalone === true) {
  document.documentElement.classList.add('ios-pwa');
}
