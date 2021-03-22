import React from 'react'
import {
  View,
  Image,
  TouchableOpacity
}from 'react-native'
import styles from './style'

class BackButton extends React.Component {
  render(){
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onBack}>
        <Image source={require('@assets/ic_back_button.png')} style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}

export default BackButton
