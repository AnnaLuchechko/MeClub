// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    alignSelf:'center'
  },
  icon:{
    width:30,
    height:20,
    resizeMode:'contain'
  },
  badgeWrap:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:'#4a4e62',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:0,
    left:-15
  },
  badge:{
    fontSize:8,
    color:'white',
    textAlign:'center'
  },
})
