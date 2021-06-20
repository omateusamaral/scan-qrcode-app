import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center"
  },
  containerPermission:{
    flex: 1,
    justifyContent: "center",
     alignItems: "center"
  },
  txtPermission:{
    fontWeight: 'bold',
     fontSize: 18
  },
  btnAcess:{
    backgroundColor:'#34cb79',
    marginTop:10,
    borderRadius:5,
    padding: 7,
},
btnText:{
  color: '#fff',
}
});


export default styles;