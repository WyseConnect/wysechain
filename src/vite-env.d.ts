
/// <reference types="vite/client" />

// Add standalone property to Navigator interface for iOS PWA detection
interface Navigator {
  standalone?: boolean;
}

