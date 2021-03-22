// global styles here
import { StyleSheet, Dimensions } from 'react-native';
let {width} = Dimensions.get('window')

export default StyleSheet.create({
  linearGradient1:{
    width:(width-50)/2,
    height:30,
    position: 'absolute',
    top:0,
    left:0,
    borderWidth: 0,
    borderColor: 'transparent'
  },
  linearGradient2:{
    width:(width-50)/2,
    height:30,
    position: 'absolute',
    top:0,
    right:0,
    borderWidth: 0,
    borderColor: 'transparent'
  }
})
