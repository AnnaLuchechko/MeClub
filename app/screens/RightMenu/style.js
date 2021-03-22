import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:"#000819"
  },
  avatar:{
  	width:60,
  	height:60,
  	resizeMode:'cover',
  	alignSelf:'center',
  	marginTop:30,
    borderRadius:50
  },
  name:{
  	color:'white',
    textAlign:'center',
    fontSize:12,
    marginHorizontal:10,
  	marginTop:5
  },
  content:{
    marginTop:30,
    marginBottom:5
  },
  item:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    marginTop:10
  },
  icon:{
    width:30,
  	height:30,
  	resizeMode:'contain',
  },
  itemText:{
  	color:'white',
    fontSize:11,
    marginLeft:10
  },
});
