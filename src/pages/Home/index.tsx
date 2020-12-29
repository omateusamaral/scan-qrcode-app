import React, { useEffect, useState } from 'react';

import { Text,View, SafeAreaView, Button,StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { Camera } from 'expo-camera';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function Home() {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  async function getCameraPermission() {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      setHasPermission(true);
    }
  }


  useEffect(() => {
    getCameraPermission();
  }, []);

  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    if (scanned === false) {
      const { type, data } = scanningResult;
   
        setScanned(true);
        // navigation.navigate("ShowResult", { dados: data });
      console.log(data);
      
    }
  }



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text> Acesso negado </Text>;
  }
  return (
    <SafeAreaView style={styles.container}>


    <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
    >


        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
    </BarCodeScanner>
    {scanned && <Button title={'Clique aqui para scanear novamente'}  onPress={() => setScanned(false)} />}
</SafeAreaView>
  )

}

export default Home;