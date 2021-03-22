// global styles here
import { StyleSheet, Dimensions } from 'react-native';
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const d = 280

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#090f2e',
  },
  picker:{
    width:250,
    height: 200,
    alignSelf:'center'
  },
  input:{
    borderRadius:3,
    backgroundColor:'white',
    marginHorizontal:40,
    height:30,
    paddingVertical:0,
    paddingHorizontal:10,
    marginBottom:40,
    marginTop:20,
    fontSize:12
  },
})
