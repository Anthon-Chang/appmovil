import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',   // el que ya tienes, no lo cambies
  appName: 'photo-gallery',    // el que ya tienes
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',   // ← esto corrige la deformación
      splashFullScreen: true,            // ← ocupa toda la pantalla
      splashImmersive: true,             // ← oculta barra de estado
    },
  },
};

export default config;