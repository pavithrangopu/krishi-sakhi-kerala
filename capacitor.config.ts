import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.bb39485bb2b647af89f7e77aa1ab7345',
  appName: 'krishi-sakhi-kerala',
  webDir: 'dist',
  server: {
    url: 'https://bb39485b-b2b6-47af-89f7-e77aa1ab7345.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#4F7942',
      showSpinner: false
    }
  }
};

export default config;