import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
}from 'react-native'
import styles from './style'
import {ActivityItem,PickerHorizontal} from '@components'
import Swiper from 'react-native-swiper';

const data = [
  {
    name:'DOG WALKING',
    icon:require('@assets/ic_dog_walking.png'),
  },
  {
    name:'ESPORTS',
    icon:require('@assets/ic_cycling.png'),
  },
  {
    name:'SKATEBOARDING',
    icon:require('@assets/ic_skateboarding.png'),
  },
  {
    name:'SURFING',
    icon:require('@assets/ic_golfing.png'),
  },
  {
    name:'DOG WALKING',
    icon:require('@assets/ic_dog_walking.png'),
  },
  {
    name:'ESPORTS',
    icon:require('@assets/ic_cycling.png'),
  },
  {
    name:'SKATEBOARDING',
    icon:require('@assets/ic_skateboarding.png'),
  },
  {
    name:'SURFING',
    icon:require('@assets/ic_golfing.png'),
  },
  {
    name:'ESPORTS',
    icon:require('@assets/ic_cycling.png'),
  },
  {
    name:'SKATEBOARDING',
    icon:require('@assets/ic_skateboarding.png'),
  },
  {
    name:'SURFING',
    icon:require('@assets/ic_golfing.png'),
  },
]
class Activities extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <TextInput
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            placeholderTextColor="#5e627a"
            placeholder="Type in any missing activity"
            style={styles.input}/>
        <View style={styles.trendingNow}>
          <Text style={styles.title}>TRENDING NOW  |  ROULETTE</Text>
          <ScrollView contentContainerStyle={styles.row} horizontal={true}>
            {this.renderItem(data[0],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[1],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[2],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[3],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[4],(item)=>{
              this.renderAddAlert(item)
            })}
          </ScrollView>
        </View>

        <View style={styles.currentActivities}>
          <Text style={styles.title}>YOUR CURRENT ACTIVITIES</Text>
          <ScrollView contentContainerStyle={styles.row} horizontal={true}>
            {this.renderItem(data[0],(item)=>{
              this.renderDeleteAlert(item)
            })}
            {this.renderItem(data[1],(item)=>{
              this.renderDeleteAlert(item)
            })}
            {this.renderItem(data[2],(item)=>{
              this.renderDeleteAlert(item)
            })}
            {this.renderItem(data[3],(item)=>{
              this.renderDeleteAlert(item)
            })}
            {this.renderItem(data[4],(item)=>{
              this.renderDeleteAlert(item)
            })}
          </ScrollView>
        </View>

        <View style={styles.trendingNow}>
          <Text style={styles.title}>CHANGE ACTIVITIES (SWIPE LEFT / RIGHT)</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.row}>
            {this.renderItem(data[0],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[1],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[2],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[3],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[4],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[2],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[3],(item)=>{
              this.renderAddAlert(item)
            })}
            {this.renderItem(data[4],(item)=>{
              this.renderAddAlert(item)
            })}
          </ScrollView>
        </View>
      </View>
    )
  }

  renderItem(item,onPress){
    return (
      <TouchableOpacity style={styles.button} onPress={()=>onPress(item)}>
        <Image source={item.icon} style={styles.buttonIcon}/>
        <Text style={styles.buttonText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderAddAlert(item){
    Alert.alert("Confirmation","Would you like to add this Activity to your Current Activities?",[
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => {
        console.log("Add: ",item);
      }},
    ])
  }

  renderDeleteAlert(item){
    Alert.alert("Confirmation","Would you like to remove this Activity from your Current Activities?",[
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => {
        console.log("Add: ",item);
      }},
    ])
  }
}

export default Activities
