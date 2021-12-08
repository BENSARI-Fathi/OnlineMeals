import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { AuthenticationContextProvider } from './src/services/authentication/authenticationContext'
import { Navigator } from './src/infrastructure/navigation/index';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigator />
      </AuthenticationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider >
  );
}

// folder 8 => current 64 => next 65