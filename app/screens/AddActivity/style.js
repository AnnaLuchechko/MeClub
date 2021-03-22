// global styles here
import { StyleSheet, Dimensions } from 'react-native';
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const d = 300

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#090f2e'
  },
  item:{
    alignItems:'center'
  },
  icon:{
    width:30,
    height:30,
    resizeMode:'contain'
  },
  iconText:{
    //marginTop:5,
    color:'white',
    fontSize:7,
    textAlign:'center',
    position:'absolute',
    top: 35,
    width:60,
    left:-15
  },
  wrap:{
    width:d,
    height:d,
    alignSelf:'center',
    marginTop:30,
    //backgroundColor:'red'
  },
  backgroundView:{
    borderRadius:d/2,
    backgroundColor:'#151a37',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom:0,
    right:0
  },
  centerView:{
    width:120,
    height:120,
    borderRadius:60,
    backgroundColor:'#090f2e',
    position:'absolute',
    top:(d-120)/2,
    left:(d-120)/2
  },
  hightLight:{
    width:120,
    //height:200,
    position:'absolute',
    top:-30,
    alignSelf:'center',
    borderTopWidth: 140,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    //borderStyle: 'solid'
  },
  iconProceed:{
    width:80,
    height:40,
    resizeMode:'contain',
  },
  btnProceed:{
    alignSelf:'center',
    marginBottom:20,
    marginTop:20
  },
})
