import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
}from 'react-native'
import styles from './style'

class DashboardHeader extends React.Component {
  render(){
    let {day,monthDay} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{day}</Text>
        <View style={styles.separator}/>
        <Text style={styles.text}>{monthDay}</Text>
      </View>
    )
  }
}

export default DashboardHeader
