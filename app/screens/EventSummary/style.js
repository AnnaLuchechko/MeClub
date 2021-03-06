// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor:'#090f2e',
    padding:10
  },
  icon:{
    width:25,
    height:25,
    resizeMode:'contain'
  },
  text:{
    fontSize:8,
    color:'white',
    textAlign:'center'
  },
  topRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:60,
    backgroundColor:'#151a37',
    padding:10
  },
  item:{
    justifyContent:'center',
    alignItems:'center',
    width:50
  },
  logo:{
    position:'absolute',
    top:-10,
    width:60,
    height:60,
    alignSelf:'center',
    resizeMode:'contain'
  },
  topView:{
    marginTop:20
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    height:60,
    backgroundColor:'#151a37',
    padding:10,
    marginTop:3
  },
  rightItem:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  rightItemText:{
    fontSize:10,
    color:'white',
  },
  row1:{
    flexDirection:'row',
    alignItems:'center',
    height:60,
    marginTop:3
  },
  leftView:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    backgroundColor:'#151a37',
    height:'100%',
    paddingLeft:10,
  },
  rightView:{
    height:'100%',
    width:75,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:3,
    backgroundColor:'#151a37',
  },
  rightItemText1:{
    fontSize:9,
    color:'white',
  },
  noteWrap:{
    marginTop:3,
    backgroundColor:'white',
    padding:10
  },
  note:{
    fontSize:12,
    color:'#5e627a'
  },
  btnNext:{
    height:40,
    width:40,
    alignSelf:'center',
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },
  btnIcon:{
    width:30,
    height:30,
    resizeMode:'contain'
  },
})
