// global styles here
import { StyleSheet, Dimensions } from 'react-native';
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const d = 280

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#090f2e',
    alignItems:'center',
    justifyContent:'center'
  },
  picker:{
    width:250,
    height: 200,
  },
  btnSearch:{
    width:50,
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(136, 138, 141, 1)',
    position:'absolute',
    bottom:20,
    alignSelf:'center'
  },
  btnSearchText:{
    color:"white",
    fontSize:7,
    textAlign:'center',
    margin:5
  }
})
