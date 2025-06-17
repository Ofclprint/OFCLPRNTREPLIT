# Manufacturing ERP - Expo Mobile App Deployment Guide

This guide provides complete instructions for deploying your Manufacturing ERP system as a mobile app using Expo.

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Expo CLI installed: `npm install -g @expo/cli`
- EAS CLI installed: `npm install -g eas-cli`
- Expo account (free at expo.dev)

### Setup Instructions

1. **Initialize New Expo Project**
   ```bash
   npx create-expo-app manufacturing-erp-mobile --template blank-typescript
   cd manufacturing-erp-mobile
   ```

2. **Replace package.json with expo-package.json**
   ```bash
   cp expo-package.json package.json
   npm install
   ```

3. **Copy Core Application Files**
   ```bash
   # Copy your client source code
   cp -r client/src/* src/
   
   # Copy shared schema and types
   cp -r shared/* src/shared/
   
   # Copy configuration files
   cp app.json ./
   cp eas.json ./
   cp babel.config.js ./
   ```

4. **Configure Environment Variables**
   Create `.env` file:
   ```
   EXPO_PUBLIC_API_BASE_URL=https://your-server-domain.com
   EXPO_PUBLIC_APP_ENV=production
   ```

## Mobile App Configuration

### App.json Configuration
- **Bundle Identifiers**: Update iOS `bundleIdentifier` and Android `package`
- **App Icons**: Replace placeholder icons in `assets/` folder
- **Permissions**: Camera, storage, and network permissions included
- **Build Settings**: Optimized for both development and production

### Key Features Enabled
- **Barcode Scanning**: Using expo-camera and expo-barcode-scanner
- **File Operations**: Document export and sharing capabilities
- **Offline Storage**: Secure storage for user preferences
- **Network Detection**: Real-time connectivity monitoring
- **Camera Integration**: Quality control photo capture

## Development Workflow

### Local Development
```bash
# Start development server
npm start

# Test on physical device
npm run android  # or npm run ios
```

### Building for Production

1. **Configure EAS Build**
   ```bash
   eas login
   eas build:configure
   ```

2. **Build for App Stores**
   ```bash
   # Build for both platforms
   npm run build:all
   
   # Or build individually
   npm run build:android
   npm run build:ios
   ```

3. **Submit to App Stores**
   ```bash
   # Submit to Google Play Store
   npm run submit:android
   
   # Submit to Apple App Store
   npm run submit:ios
   ```

## API Integration

### Server Configuration
Your backend server needs CORS configuration for mobile app:

```javascript
// In your Express server
app.use(cors({
  origin: [
    'exp://localhost:19000',
    'exp://your-expo-project-id.exp.direct',
    'https://your-production-domain.com'
  ],
  credentials: true
}));
```

### Authentication Setup
Mobile app uses the same authentication system as web app:
- Session-based authentication
- Secure cookie handling
- Automatic token refresh

## App Store Submission

### iOS App Store
1. **Apple Developer Account**: Required ($99/year)
2. **App Store Connect**: Configure app metadata
3. **TestFlight**: Beta testing before release
4. **Review Process**: 1-3 days typically

### Google Play Store
1. **Google Play Console**: One-time $25 fee
2. **App Bundle**: Uses AAB format for optimized distribution
3. **Internal Testing**: Test with team before release
4. **Review Process**: Few hours to 1 day typically

## Mobile-Specific Features

### Optimized UI Components
- Touch-friendly buttons and inputs
- Mobile-optimized navigation
- Responsive layouts for different screen sizes
- Gesture support for common actions

### Performance Optimizations
- Lazy loading of screens
- Image optimization
- Efficient data caching
- Background sync capabilities

### Platform-Specific Features
- **iOS**: Native look and feel, iOS-specific gestures
- **Android**: Material Design components, back button handling
- **Universal**: Cross-platform compatibility

## Security Considerations

### Data Protection
- Secure storage for sensitive data
- Certificate pinning for API calls
- Biometric authentication support
- Encrypted local storage

### Compliance
- GDPR compliance for data handling
- Industry-specific regulatory requirements
- Data retention policies
- User privacy controls

## Troubleshooting

### Common Issues
1. **Build Failures**: Check expo-package.json dependencies
2. **API Connection**: Verify CORS and network settings
3. **Permission Errors**: Ensure proper platform permissions
4. **Performance**: Optimize images and reduce bundle size

### Debugging Tools
- Expo DevTools for development
- React Native Debugger
- Platform-specific debugging tools
- Performance monitoring

## Production Checklist

### Pre-Release
- [ ] Test on multiple devices and screen sizes
- [ ] Verify all API endpoints work correctly
- [ ] Test barcode scanning functionality
- [ ] Validate offline capabilities
- [ ] Check app performance and memory usage

### App Store Requirements
- [ ] App icons in all required sizes
- [ ] Screenshots for different device types
- [ ] App description and metadata
- [ ] Privacy policy and terms of service
- [ ] Age rating and content warnings

### Post-Release
- [ ] Monitor crash reports and user feedback
- [ ] Track app performance metrics
- [ ] Plan regular updates and maintenance
- [ ] Monitor app store ratings and reviews

## Support and Maintenance

### Regular Updates
- Monthly security patches
- Feature updates based on user feedback
- Platform compatibility updates
- Performance improvements

### Monitoring
- Crash reporting with Sentry or similar
- Analytics for user behavior
- Performance monitoring
- Server health checks

## Cost Considerations

### Development Costs
- Expo/EAS Build: Free tier available, paid plans for teams
- Apple Developer: $99/year
- Google Play: $25 one-time fee
- App Store optimization tools (optional)

### Ongoing Costs
- Server hosting and maintenance
- Push notification services
- Analytics and monitoring tools
- Customer support infrastructure

This deployment package provides everything needed to transform your web-based Manufacturing ERP into a professional mobile application ready for app store distribution.