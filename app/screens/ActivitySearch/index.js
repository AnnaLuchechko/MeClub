import React from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity
}from 'react-native'
import styles from './style'
import {ActivityItem, PickerHorizontal, ActivityTabs} from '@components';

import _ from "lodash";

import { EventRepository } from "../../repositories/Event";

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
class ActivitySearch extends React.Component {
    state = {
        selectedTimeIndex:0,
        pickerValue:"",
        events: []
    };

    componentWillMount(){
        // load all for now. @TODO only load on current location and limit it
        EventRepository.all().then((events) => {
            //console.warn(JSON.stringify(_.first(events).latlng));
            this.setState({ events: events });
        });
    }

    showEvent(){
        return this.props.navigation.navigate('EventDetail', { eventDetail: _.first(this.state.events) });
    }

    render(){

      return (
        <View style={styles.container}>
          <PickerHorizontal />
          <View style={styles.searchWrap}>
            <TouchableOpacity style={styles.btnMap} onPress={() => this.props.navigation.navigate('ActivityMap') }>
              <Text style={styles.btnMapText}>MAP VIEW</Text>
            </TouchableOpacity>
            <TextInput
                autoCapitalize='none'
                underlineColorAndroid='transparent'
                placeholderTextColor="#5e627a"
                placeholder="Search for activity or host name"
                style={styles.input}/>
          </View>
          <View style={styles.timeWrap}>
            <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:0})}>
              <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 0 && {color:'white'}]}>TODAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:1})}>
              <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 1 && {color:'white'}]}>TOMORROW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:2})}>
              <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 2 && {color:'white'}]}>NEXT 7 DAYS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:3})}>
              <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 3 && {color:'white'}]}>NEXT 30 DAYS</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            keyExtractor={(item,index)=>index}
            style={{flex:1}}
            renderItem={this.renderItem.bind(this)}
            data={data}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
          />
            <ActivityTabs {...this.props} />
        </View>
      )
    }

    renderItem({item, index, section}){
        // @TODO update below when events are dynamic
      return <ActivityItem item={item} showInfo={(eventDetail) => this.showEvent() } />
    }
}

export default ActivitySearch;