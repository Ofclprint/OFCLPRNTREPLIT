# Mobile App Setup Guide

## Overview
Your Manufacturing ERP system is now configured as a cross-platform mobile app using Capacitor. This allows you to deploy to both iOS App Store and Google Play Store while keeping your existing React codebase.

## What's Been Added

### Mobile Packages Installed
- `@capacitor/core` - Core Capacitor functionality
- `@capacitor/cli` - Command line tools
- `@capacitor/android` - Android platform support
- `@capacitor/ios` - iOS platform support
- `@capacitor/camera` - Camera access for barcode scanning
- `@capacitor/device` - Device information
- `@capacitor/app` - App lifecycle management
- `@capacitor/splash-screen` - Splash screen control
- `@capacitor/status-bar` - Status bar styling
- `@capacitor/network` - Network status monitoring

### Platforms Added
- ✅ Android platform configured
- ✅ iOS platform configured

## Next Steps for App Store Deployment

### For Android (Google Play Store)
1. **Build the app**: Run the build process
2. **Generate signed APK**: Configure signing keys in Android Studio
3. **Test on device**: Use Android Studio or `npx cap run android`
4. **Upload to Play Console**: Create developer account and upload

### For iOS (Apple App Store)
1. **Build the app**: Requires macOS with Xcode
2. **Configure signing**: Apple Developer account required ($99/year)
3. **Test on device**: Use Xcode simulator or real device
4. **Upload to App Store**: Use Xcode or Transporter app

## Mobile-Specific Features

### Enhanced Barcode Scanner
- Uses device camera directly
- Better performance on mobile devices
- Native camera permissions

### Touch-Optimized Interface
- Larger touch targets
- Mobile navigation patterns
- Responsive design for all screen sizes

### Offline Capabilities
- Local data caching
- Sync when network available
- Works without internet connection

## Development Commands

### Building for Mobile
```bash
# Build web assets for mobile
vite build

# Sync with mobile platforms
npx cap sync

# Open in native IDEs
npx cap open android  # Opens Android Studio
npx cap open ios      # Opens Xcode (macOS only)

# Run on device/simulator
npx cap run android
npx cap run ios
```

### Testing
- **Web**: Continue using your current development server
- **Android**: Android Studio emulator or real device
- **iOS**: Xcode simulator or real device (macOS required)

## App Store Requirements

### Icons & Splash Screens
- App icons for all required sizes
- Splash screens for different devices
- Screenshots for store listings

### Permissions
- Camera permission for barcode scanning
- Network permission for data sync
- Storage permission for offline data

### Store Listings
- App description and features
- Privacy policy
- Terms of service
- Screenshots and promotional images

## Publishing Costs
- **Google Play**: $25 one-time developer fee
- **Apple App Store**: $99/year developer account
- **Optional**: Code signing certificates for enhanced security

Your app is now ready for mobile development and deployment!