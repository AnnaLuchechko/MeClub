// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    paddingVertical:15,
    alignItems:'center',
    justifyContent:'center'
  },
  content:{
    flexDirection:'row',
    width:180,
    alignItems:'center',
  },
  icon:{
    width:25,
    height:25,
    resizeMode:'contain',
  },
  title:{
    fontSize:12,
    color:'white',
    marginLeft:10
  },
})
