// global styles here
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    width: null,
    height: null,
    backgroundColor:'#090f2e'
  },
  foreground:{
    flex:1,
    backgroundColor:'rgba(33, 38, 69, 0.9)'
  },
  input:{
    borderRadius:3,
    backgroundColor:'white',
    width:250,
    alignSelf:'center',
    marginTop:15,
    marginBottom:5,
    height:30,
    paddingVertical:0,
    paddingHorizontal:10,
    fontSize:10
  },
  content: {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
  },
  text:{
    color:'white',
    fontSize:10,
    textAlign:'center',
    marginBottom:10
  },
  map:{
      height: '100%',
      width: '100%'
  },
  btnProceed:{
    alignSelf:'center',
    marginVertical:20,
  },
  icon:{
    width:80,
    height:40,
    resizeMode:'contain',
  }
});
