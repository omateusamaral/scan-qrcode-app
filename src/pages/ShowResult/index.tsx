import React from 'react';
import { Text, TouchableOpacity, View, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather as Icon } from "@expo/vector-icons";
import ResultRouteParams from '../../interfaces/ResultRouteParams';
import styles from './styles';

function ShowResult() {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.navigate("Home");
  }
 async function openExternalLink(){
    const canopen = await Linking.canOpenURL(dados);
   if(canopen){
    Linking.openURL(dados);
   }
    
 
  }
  const route = useRoute();
  const { dados } = route.params as ResultRouteParams;
  return (
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
        <Text style={styles.title}>Aqui está o resultado do scaneamento, Obrigado por usar nosso APP.</Text>
      </View>
      <View style={styles.ResultContainer}>
        <Text style={styles.txtResult}>{dados}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={openExternalLink}>
          <Text style={styles.txtBtn}>Conferir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default ShowResult;