import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import {DashboardItem, DashboardHeader} from '@components';

const wrapSize = 150;
const padding = 20;


class EventConfirm extends React.Component {

  state = {
    activity: null
  };

  getUser(){
      return this.props.screenProps.user;
  }

  componentWillMount(){
      // activity is a firestore reference type
      this.props.event.activity.get().then((res) => {
          this.setState({
              "activity": res.data()
          });
      });
  }

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{height:(wrapSize-padding)*2,width:(wrapSize-padding)*2 + 10}}>
            <View style={[styles.wrapView,{backgroundColor:'#4a4e62',alignSelf:'center',position:'absolute',bottom:0}]}/>
            <View style={[styles.wrapView,{backgroundColor:'rgba(67, 4, 35, 0.6)', position:'absolute',bottom:98,left:0}]}>
                <Image source={{uri: this.getUser().photo }} style={{ borderRadius: wrapSize/2, width: wrapSize - padding*2, height: wrapSize - padding*2}} />
            </View>
            <View style={[styles.wrapView,{backgroundColor:'rgba(0, 6, 67, 0.6)', position:'absolute',bottom:98,right:0}]}>
                <Image source={require('@assets/ic_avatar_test1.png')} style={{ borderRadius: wrapSize/2, width: wrapSize - padding*2, height: wrapSize - padding*2}}/>
            </View>
              {this.state.activity ?
                <Image source={{ uri: this.state.activity.icon }} style={[styles.icon, {zIndex:999, alignSelf:'center',position:'absolute',bottom:20}]}/>
              : null}
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.message}>You’re on. Have fun together!</Text>
          <View style={styles.buttonWrap}>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#43041a'}]} activeOpacity={0.8}>
              <Text style={styles.buttonText}>ADD TO CALENDAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#4a4e62'}]} activeOpacity={0.8}>
              <Text style={styles.buttonText}>MY CHAT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#00055a'}]} activeOpacity={0.8}>
              <Image source={require('@assets/ic_share.png')} style={styles.buttonIcon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

EventConfirm.propTypes = {
  event: PropTypes.object
};

export default EventConfirm;