// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'#151a37',
  },
  content:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    backgroundColor:'#151a37',
    paddingVertical:10
  },
  largeItem:{
    alignItems:'center',
    width:80
  },
  largeIcon:{
    width:45,
    height:45,
    resizeMode:'contain',
  },
  icon:{
    width:20,
    height:20,
    resizeMode:'contain',
    marginBottom:15
  },
  text:{
    fontSize:7,
    color:'white',
    textAlign:'center'
  },
  item:{
    alignItems:'center',
    flex:1
  },
  statusWrap:{
    width:65,
    backgroundColor:'#0e1332'
  },
  statusItem:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  statusText:{
    fontSize:7,
    color:'#5e627a',
    textAlign:'center'
  }
})
