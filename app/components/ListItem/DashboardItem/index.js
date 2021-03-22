import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
}from 'react-native'
import styles from './style'

class DashboardItem extends React.Component {
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
          <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={()=>showInfo(item)}>
            <Image source={require('@assets/ic_info.png')} style={styles.icon}/>
            <Text style={styles.text}>INFO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={require('@assets/ic_chat.png')} style={styles.icon}/>
            <Text style={styles.text}>CHAT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={require('@assets/ic_rate.png')} style={styles.icon}/>
            <Text style={styles.text}>RATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={require('@assets/ic_edit.png')} style={styles.icon}/>
            <Text style={styles.text}>EDIT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statusWrap}>
          <View style={[styles.statusItem,status=='CONFIRMED' && {backgroundColor:'#ff7200'}]}>
            <Text style={[styles.statusText,status=='CONFIRMED' && {fontSize:9,color:'white'}]}>CONFIRMED</Text>
          </View>
          <View style={[styles.statusItem,status=='INVITED' && {backgroundColor:'#fbad18'}]}>
            <Text style={[styles.statusText,status=='INVITED' && {fontSize:9,color:'white'}]}>INVITED</Text>
          </View>
          <View style={[styles.statusItem,status=='GOING' && {backgroundColor:'#06ab4b'}]}>
            <Text style={[styles.statusText,status=='GOING' && {fontSize:9,color:'white'}]}>GOING</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default DashboardItem
