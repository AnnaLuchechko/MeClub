import React from 'react'
import {
  View,
  Text,
  FlatList
}from 'react-native'
import styles from './style'
import {ManageClubItem,DashboardHeader} from '@components'

const data = [
  {
    icon:require('@assets/manage/ic_edit_admin.png'),
    title:'Edit Administrator'
  },
  {
    icon:require('@assets/manage/ic_upload.png'),
    title:'Upload New Club Logo'
  },
  {
    icon:require('@assets/ic_datetime.png'),
    title:'Club Events'
  },
  {
    icon:require('@assets/manage/ic_rename.png'),
    title:'Rename Club'
  },
  {
    icon:require('@assets/manage/ic_gender.png'),
    title:'Gender Preferance'
  },
  {
    icon:require('@assets/ic_group.png'),
    title:'Age Group'
  }
];
class ManageClub extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {data.map((item,index)=><ManageClubItem key={index} item={item} />)}
      </View>
    )
  }
}

export default ManageClub
