import React from 'react'
import {
  View,
  Image,
  TouchableOpacity
}from 'react-native'
import styles from './style'

class Logo extends React.Component {
  static defaultProps = {
    onPress:()=>{}
  }
  render(){
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
        <Image source={require('@assets/ic_logo.png')} style={styles.logo}/>
      </TouchableOpacity>
    )
  }
}

export default Logo
