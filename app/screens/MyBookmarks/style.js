// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#090f2e',
    paddingTop: 10
  },
  separator:{
    height:3,
    backgroundColor:'#090f2e'
  },
  input:{
    borderRadius:3,
    backgroundColor:'white',
    marginLeft:15,
    height:30,
    paddingVertical:0,
    paddingHorizontal:10,
    flex:1
  },
  btnMap:{
    width:40,
    height:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4a4e62',
  },
  btnMapText:{
    fontSize:9,
    color:'white',
    textAlign:'center'
  },
  searchWrap:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    marginTop:10,
  },
  timeWrap:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
  },
  btnTimeItem:{
    height:20,
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btnTimeItemText:{
    fontSize:10,
    color:'#4a4e62',
    textAlign:'center',
  }

})
