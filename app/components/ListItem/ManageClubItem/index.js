import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
}from 'react-native'
import styles from './style'

class ClubEventItem extends React.Component {
  render(){
    let {item} = this.props;
    let {title,icon,status} = item;

    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>{}}>
        <View style={styles.content}>
          <Image source={icon} style={styles.icon}/>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ClubEventItem
