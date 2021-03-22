// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'#151a37',
    alignItems:'center',
    paddingVertical:10
  },
  leftContent:{
    width:100,
  },
  icon:{
    width:40,
    height:40,
    resizeMode:'contain',
    marginHorizontal:15
  },
  rightContent:{
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
  dayMonth:{
    fontSize:12,
    color:'white',
    textAlign:'right'
  },
  time:{
    fontSize:9,
    color:'white',
    textAlign:'right'
  },
})
