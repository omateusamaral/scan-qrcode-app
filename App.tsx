import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppStack from './src/routes';

export default function App() {


  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>

      <AppStack />
      <StatusBar style="dark" />

    </>
  );
}


