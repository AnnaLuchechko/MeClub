import React from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput
}from 'react-native'
import styles from './style'
import {ListOfChatsItem} from '@components'
const data = [
  {
    avatar:require('@assets/ic_avatar_test1.png'),
    name:'CASSIE',
    eventName:'CYCLING',
    description:'Beginner, Long Listance, Road',
  },
  {
    avatar:require('@assets/ic_avatar_test2.png'),
    name:'PETER',
    eventName:'ESPORTS',
    description:'Professional, Fighting, LAN',
    badgeIcon:require('@assets/group_badge_1.png'),
  },
  {
    avatar:require('@assets/ic_avatar_test1.png'),
    name:'RONALD',
    eventName:'SKATEBOARDING',
    description:'Professional, Racing, Road',
    badgeIcon:require('@assets/group_badge_2.png'),
  },
  {
    avatar:require('@assets/ic_avatar_test2.png'),
    name:'JOHN',
    eventName:'SURFING',
    description:'Beginner, Longboarding, Outdoor',
  },
  {
    avatar:require('@assets/ic_avatar_test1.png'),
    name:'CASSIE',
    eventName:'CYCLING',
    description:'Beginner, Long Listance, Road',
  },
  {
    avatar:require('@assets/ic_avatar_test2.png'),
    name:'PETER',
    eventName:'ESPORTS',
    description:'Professional, Fighting, LAN',
    badgeIcon:require('@assets/group_badge_1.png'),
  },
  {
    avatar:require('@assets/ic_avatar_test1.png'),
    name:'RONALD',
    eventName:'SKATEBOARDING',
    description:'Professional, Racing, Road',
    badgeIcon:require('@assets/group_badge_2.png'),
  },
  {
    avatar:require('@assets/ic_avatar_test2.png'),
    name:'JOHN',
    eventName:'SURFING',
    description:'Beginner, Longboarding, Outdoor',
  }
]
class ListOfChats extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              placeholder="Search for activity or host name"
              style={styles.input}/>
        </View>
        <FlatList
          keyExtractor={(item,index)=>index}
          style={{flex:1}}
          renderItem={this.renderItem.bind(this)}
          data={data}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
      </View>
    )
  }

  renderItem({item,index,section}){
    return <ListOfChatsItem item={item} showInfo={this.props.showInfo} />
  }
}

export default ListOfChats
