import React, { useEffect, useState } from 'react';

import { Text, View, SafeAreaView, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { Camera } from 'expo-camera';
import styles from './styles';
import { useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();


  useEffect(() => {
    (async function getPermission(){
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function getPermission(){
    setLoading(true);
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
    setLoading(false);
  }



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View style={ styles.containerPermission}>
        <Text style={styles.txtPermission}>Acesso a câmera negado</Text>

        <TouchableOpacity 
        style={styles.btnAcess} 
        activeOpacity={0.7}
         onPress={getPermission}
         >
          {
            loading ? (
              <ActivityIndicator color="#121212" size={24} />
            ) : (
              <Text style={styles.btnText}>Permitir Acesso</Text>
            )
          }
        </TouchableOpacity>
      </View>
    );
  }
  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    if (scanned === false) {
      const { type, data } = scanningResult;

      setScanned(true);
      navigation.navigate("ShowResult", { dados: data });
    }
  }




  return (
    <SafeAreaView style={styles.container}>

      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask edgeColor="#fff" showAnimatedLine />
      </BarCodeScanner>
      {scanned && <Button title={'Clique aqui para escanear novamente'} 
      onPress={() => setScanned(false)} />
      }
    </SafeAreaView>
  )

}

export default Home;