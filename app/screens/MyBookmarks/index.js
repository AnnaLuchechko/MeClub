import React from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView
}from 'react-native'
import styles from './style'
import {ActivityItem,PickerHorizontal} from '@components'
import Swiper from 'react-native-swiper';

const data = [
  {
    time:new Date(),
    name:'CASSIE',
    eventName:'DOG WALKING',
    description:'Beginner, Short Distance, Park',
    icon:require('@assets/ic_dog_walking.png'),
  },
  {
    time:new Date(),
    name:'PETER',
    eventName:'ESPORTS',
    description:'Professional, Fighting, LAN',
    icon:require('@assets/ic_cycling.png'),
  },
  {
    time:new Date(),
    name:'RONALD',
    eventName:'SKATEBOARDING',
    description:'Professional, Racing, Road',
    icon:require('@assets/ic_skateboarding.png'),
  },
  {
    time:new Date(),
    name:'JOHN',
    eventName:'SURFING',
    description:'Beginner, Longboarding, Outdoor',
    icon:require('@assets/ic_golfing.png'),
  },
  {
    time:new Date(),
    name:'CASSIE',
    eventName:'DOG WALKING',
    description:'Beginner, Short Distance, Park',
    icon:require('@assets/ic_dog_walking.png'),
  },
  {
    time:new Date(),
    name:'PETER',
    eventName:'ESPORTS',
    description:'Professional, Fighting, LAN',
    icon:require('@assets/ic_cycling.png'),
  },
  {
    time:new Date(),
    name:'RONALD',
    eventName:'SKATEBOARDING',
    description:'Professional, Racing, Road',
    icon:require('@assets/ic_skateboarding.png'),
  },
  {
    time:new Date(),
    name:'JOHN',
    eventName:'SURFING',
    description:'Beginner, Longboarding, Outdoor',
    icon:require('@assets/ic_golfing.png'),
  },
  {
    time:new Date(),
    name:'PETER',
    eventName:'ESPORTS',
    description:'Professional, Fighting, LAN',
    icon:require('@assets/ic_cycling.png'),
  },
  {
    time:new Date(),
    name:'RONALD',
    eventName:'SKATEBOARDING',
    description:'Professional, Racing, Road',
    icon:require('@assets/ic_skateboarding.png'),
  },
  {
    time:new Date(),
    name:'JOHN',
    eventName:'SURFING',
    description:'Beginner, Longboarding, Outdoor',
    icon:require('@assets/ic_golfing.png'),
  },
]
class MyBookmarks extends React.Component {
  state = {
    selectdTimeIndex:0,
    pickerValue:""
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.timeWrap}>
          <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectdTimeIndex:0})}>
            <Text style={[styles.btnTimeItemText, this.state.selectdTimeIndex == 0 && {color:'white'}]}>TODAY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectdTimeIndex:1})}>
            <Text style={[styles.btnTimeItemText, this.state.selectdTimeIndex == 1 && {color:'white'}]}>TOMORROW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectdTimeIndex:2})}>
            <Text style={[styles.btnTimeItemText, this.state.selectdTimeIndex == 2 && {color:'white'}]}>NEXT 7 DAYS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectdTimeIndex:3})}>
            <Text style={[styles.btnTimeItemText, this.state.selectdTimeIndex == 3 && {color:'white'}]}>NEXT 30 DAYS</Text>
          </TouchableOpacity>
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
    return <ActivityItem item={item} showInfo={this.props.showInfo} />
  }
}

export default MyBookmarks
