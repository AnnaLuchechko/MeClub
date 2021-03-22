// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'#151a37',
    paddingVertical:10,
    alignItems:'center'
  },
  infoWrap:{
    minWidth:80,
    alignItems:'center'
  },
  avatar:{
    width:40,
    height:40,
    resizeMode:'contain',
  },
  name:{
    fontSize:9,
    color:'white',
    textAlign:'center'
  },
  content:{
    flex:1
  },
  eventName:{
    fontSize:12,
    color:'white',
  },
  description:{
    fontSize:9,
    color:'white',
  },
  nextIcon:{
    width:7,
    height:15,
    resizeMode:'contain',
    marginHorizontal:10
  },
  badgeIcon:{
    width:40,
    height:40,
    resizeMode:'contain',
  }
})
