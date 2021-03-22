// global styles here
import { StyleSheet, Dimensions } from 'react-native';
const wrapSize = 150
const padding = 20

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#090f2e',
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bottomView:{

  },
  message:{
    color:'white',
    fontSize:12,
    textAlign:'center'
  },
  buttonWrap:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30,
    marginTop:20
  },
  button:{
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5
  },
  buttonText:{
    color:'white',
    fontSize:9,
    textAlign:'center'
  },
  buttonIcon:{
    width:20,
    height:20,
    resizeMode:'contain'
  },
  wrapView:{
    width:wrapSize,
    height:wrapSize,
    borderRadius:wrapSize/2,
    alignItems:'center',
    justifyContent:'center',
  },
  icon:{
    width:wrapSize - padding*2,
    height:wrapSize - padding*2,
    borderRadius:wrapSize/2 - padding,
    resizeMode:'contain'
  }
})
