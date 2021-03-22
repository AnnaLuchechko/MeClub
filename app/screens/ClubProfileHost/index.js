import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './style';

import moment from 'moment';

class ClubProfileHost extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.topRow}>
            <View style={styles.item}>
              <Image source={require('@assets/ic_hurley.png')} style={styles.icon}/>
              <Text style={styles.text}>Hurley</Text>
            </View>
          </View>
          <View style={styles.logoWrap}>
            <Image source={require('@assets/ic_surfing.png')} style={styles.logo}/>
            <Text style={styles.text}>SURFING</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.rightItem, {width: 120}]}>
            <Text style={[styles.rightItemText]}>
                FLYING GRANNIES
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.rightItem, {width: 120}]}>
            <Text style={[styles.rightItemText]}>
                Meet twice a month...
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.rightItem, {width: 120}]}>
            <Text style={[styles.rightItemText]}>
                MEMBERS: 19
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <Image source={require('@assets/ic_avatar_test1.png')} style={styles.icon}/>
          </View>
          <View style={[styles.rightItem,{marginRight:25}]}>
            <Text style={[styles.rightItemText]}>
              HOST: TIM SCHLEGEL
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <Image source={require('@assets/ic_location.png')} style={styles.icon}/>
            <Text style={styles.text}>LOCATION</Text>
          </View>
          <View style={[styles.rightItem,{marginRight:25}]}>
            <Text style={[styles.rightItemText]}>
              HOST: TIM SCHLEGEL
            </Text>
          </View>
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={[styles.button,{backgroundColor:'#c31f4d'}]} activeOpacity={0.8} onPress={()=>{}}>
            <Text style={styles.buttonText}>POST ACTIVITY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>{}}>
            <Text style={styles.buttonText}>AGAIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button,{backgroundColor:'#005ba3'}]} activeOpacity={0.8} onPress={()=>{}}>
            <Text style={styles.buttonText}>MANAGE CLUB</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ClubProfileHost;
