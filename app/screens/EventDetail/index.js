import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './style';

import {DashboardItem, DashboardHeader} from '@components';

import moment from 'moment';

class EventDetail extends React.Component {

  state = {
      "user": null,
      "activity": null
  };

  getEvent(){
      return this.props.navigation.state.params.eventDetail;
  }

  componentWillMount(){

      let eventDetail = this.getEvent();

      // user is a firestore reference type
      eventDetail.user.get().then((res) => {
          this.setState({
              "user": res.data()
          });
      });

      // activity is a firestore reference type
      eventDetail.activity.get().then((res) => {
          this.setState({
              "activity": res.data()
          });
      });
  }

  saveBookmark(){
      // @TODO implement
      alert('Implement Saving Bookmark');
  }

  render(){
    let eventDetail = this.getEvent();

    return (
      <ScrollView style={{flex:1,backgroundColor:'#090f2e'}} contentContainerStyle={styles.container}>
        <View style={styles.topView}>
            <View style={styles.topRow} />
            {this.state.activity ?
            <Image source={{ uri: this.state.activity.icon }} style={ styles.logo } />
            : null}
            <TouchableOpacity style={{position:'absolute', top: 20, right: 40, zIndex: 100}} activeOpacity={0.8} onPress={this.saveBookmark.bind(this)}>
                <Image source={require('@assets/ic_bookmark.png')} style={[styles.icon]}/>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <Image source={require('@assets/ic_location.png')} style={styles.icon}/>
            <Text style={styles.text}>LOCATION</Text>
          </View>
          <View style={[styles.rightItem]}>
              {eventDetail.location ?
              <Text style={[styles.rightItemText]}>
                  {eventDetail.location}
              </Text>
              : null}
            <Text style={[styles.rightItemText]}>
                { eventDetail.address }
            </Text>
            <Text style={[styles.rightItemText]}>
                { eventDetail.cityStateZip() }
            </Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.leftView}>
            <View style={styles.item}>
              <Image source={require('@assets/ic_datetime.png')} style={styles.icon}/>
              <Text style={styles.text}>DATE / TIME</Text>
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.rightItemText} numberOfLines={2}>
                  { moment(eventDetail.starts).format('LL') }
              </Text>
                {eventDetail.repeats ?
                <Text style={styles.rightItemText}>
                    Repeats {eventDetail.repeats}
                </Text>
                : null}
            </View>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.rightItemText1}>{ moment(eventDetail.starts).format('h:mm A') }</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.leftView}>
            <View style={styles.item}>
              <Image source={require('@assets/ic_group.png')} style={styles.icon}/>
              <Text style={styles.text}>AGE GROUP</Text>
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.rightItemText}>{eventDetail.ageFrom }{eventDetail.ageTo ?  '-' + eventDetail.ageTo : '+'} YRS</Text>
            </View>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.rightItemText1}>ATTENDEES</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.leftView}>
            <View style={styles.item}>
              <Image source={require('@assets/ic_host.png')} style={styles.icon}/>
              <Text style={styles.text}>HOST</Text>
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.rightItemText}>{ this.state.user ? this.state.user.displayName : null }</Text>
            </View>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.rightItemText1}>HOST PROFILE</Text>
          </View>
        </View>
        <View style={styles.noteWrap}>
          <Text style={styles.note}>{ eventDetail.note }</Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={this.props.eventConfirm}>
          <Text style={styles.buttonText}>I’M IN</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default EventDetail;
