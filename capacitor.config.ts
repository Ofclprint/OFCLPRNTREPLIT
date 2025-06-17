import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.manufacturingerp.app',
  appName: 'Manufacturing ERP',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      '*.replit.dev',
      '*.replit.app',
      'localhost',
      '127.0.0.1'
    ]
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  },
  ios: {
    scheme: 'Manufacturing ERP',
    contentInset: 'automatic'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: "#0066cc",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: "LIGHT",
      backgroundColor: "#0066cc",
      overlaysWebView: false
    },
    Camera: {
      permissions: ["camera", "photos"]
    },
    Device: {
      permissions: []
    },
    Network: {
      permissions: []
    },
    App: {
      permissions: []
    },
    Keyboard: {
      resize: "body",
      style: "DARK",
      resizeOnFullScreen: true
    }
  }
};

export default config;
