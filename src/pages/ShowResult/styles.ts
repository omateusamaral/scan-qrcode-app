import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#FFF',
    padding: 50,
  },
  container_icon: {
    paddingHorizontal: 5,
    
  },
  headerContainer: {
    marginVertical: 30
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "left",
  },
  ResultContainer: {
    marginTop: 25,
  },
  txtResult: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    fontSize: 16,
    color:"#2a9df4"
  },
  btnContainer:{
    alignItems:"center",
    marginTop:30
  },
  btn:{
    backgroundColor:"#34cb79",
    padding:7,
    paddingVertical:10,
    width:200,
    borderRadius:10,
  },
  txtBtn:{
    fontFamily:"Poppins_400Regular",
    textAlign:"center",
    fontSize:14,
    color:"#FFF"
  }
});

export default styles;