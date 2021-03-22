import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
}from 'react-native'
import styles from './style'

class ListOfChatsItem extends React.Component {
  static defaultProps = {
    showInfo:()=>{}
  }

  render(){
    let {item,showInfo} = this.props
    let {icon,eventName,description,time} = item

    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>showInfo(item)}>
        <View style={styles.leftContent} >
          <Text style={styles.dayMonth}>MARCH 12</Text>
          <Text style={styles.time}>Sunday 8:14AM</Text>
        </View>
        <Image source={icon} style={styles.icon}/>
        <View style={styles.rightContent} >
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ListOfChatsItem
