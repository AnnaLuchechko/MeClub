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
    let {name,avatar,eventName,description,badgeIcon} = item

    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>showInfo(item)}>
        <View style={styles.infoWrap} >
          <Image source={avatar} style={styles.avatar}/>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.content} >
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {badgeIcon && <Image source={badgeIcon} style={styles.badgeIcon}/>}
        <Image source={require('@assets/ic_next.png')} style={styles.nextIcon}/>
      </TouchableOpacity>
    )
  }
}

export default ListOfChatsItem
