// global styles here
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#00072c',
  },
  trendingNow:{
    backgroundColor:'#151a3f',
  },
  currentActivities:{
    backgroundColor:'transparent',
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:20
  },
  title:{
    fontSize:10,
    color:'white',
    marginLeft:10,
    marginTop:20
  },
  button:{
    alignItems:'center',
    marginHorizontal:10
  },
  buttonIcon:{
    width:45,
    height:45,
    resizeMode:'contain'
  },
  buttonText:{
    fontSize:7,
    color:'white',
    textAlign:'center',
    marginTop:3
  },
  input:{
    borderRadius:3,
    backgroundColor:'white',
    marginHorizontal:40,
    marginVertical:20,
    height:30,
    paddingVertical:0,
    paddingHorizontal:10,
    fontSize:10
  },

})
