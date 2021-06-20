import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import Clipboard from 'expo-clipboard';

import { Feather as Icon } from "@expo/vector-icons";
import ResultRouteParams from '../../interfaces/ResultRouteParams';
import styles from './styles';

function ShowResult() {
  const route = useRoute();
  const [go, setGo] = useState(false);
  const { dados } = route.params as ResultRouteParams;
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.navigate("Home");
  }

  function copyData() {
    Clipboard.setString(dados);
    Alert.alert('', 'Copiado com sucesso');
  }

  async function showWebView() {
  
    const open = await Linking.canOpenURL(dados);
    setTimeout(() => {
      
      if(open){
        setGo(true);
      }
      else{
        Alert.alert('','Não foi possível conferir.');
      }
    }, 4000)
  }

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000" />
      {
        !go ? (
          <>
            <View style={styles.container}>

              <View style={styles.container_icon}>

                <TouchableOpacity onPress={handleNavigateBack}>
                  <Icon
                    name="arrow-left"
                    size={30}
                    color="#34cb79"
                  />
                </TouchableOpacity>

              </View>
              <View style={styles.headerContainer}>
                <Text style={styles.title}>
                  Aqui está o resultado do scaneamento, Obrigado por usar nosso APP.
                </Text>
              </View>
              <View style={styles.ResultContainer}>
                <Text style={styles.txtResult}>{dados}</Text>
              </View>

              <View style={styles.btnContainer}>


                <TouchableOpacity
                  activeOpacity={.7}
                  style={styles.btn}
                  onPress={showWebView}
                >

                  <Text style={styles.txtBtn}>Conferir</Text>
                </TouchableOpacity>

                <Text style={{ marginVertical: 10 }}>Ou</Text>
                <TouchableOpacity
                  activeOpacity={.7}
                  style={styles.btn}
                  onPress={copyData}
                >
                  <Text style={styles.txtBtn}>Copiar</Text>
                </TouchableOpacity>
              </View>

            </View>


          </>
        ) : (
          <WebView
            source={{ uri: `${dados}` }}
            style={{ marginTop: 20 }}
          />
        )
      }

    </View>
  )

}

export default ShowResult;