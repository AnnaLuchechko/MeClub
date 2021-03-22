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
    let {item,showInfo} = this.props;
    let {title,icon,status} = item;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.largeItem}>
            <Image source={icon} style={styles.largeIcon}/>
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={()=>{}}>
            <Image source={require('@assets/ic_info.png')} style={styles.icon}/>
            <Text style={styles.text}>INFO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={require('@assets/ic_chat.png')} style={styles.icon}/>
            <Text style={styles.text}>CHAT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={require('@assets/ic_group.png')} style={styles.icon}/>
            <Text style={styles.text}>MEMBERS</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ClubEventItem
