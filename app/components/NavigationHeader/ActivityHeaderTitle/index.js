import React from 'react'
import {
  View,
  Text,
  Image
}from 'react-native'
import styles from './style'

class HeaderTitle extends React.Component {
  static defaultProps = {
    badge:0
  }

  render(){
    let {badge} = this.props
    return (
      <View style={styles.container}>
        <Image source={require('@assets/ic_friends_group.png')} style={styles.icon}/>
        <View style={styles.badgeWrap}><Text style={styles.badge}>{badge}</Text></View>
      </View>
    )
  }
}

export default HeaderTitle
