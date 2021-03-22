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

class ClubProfileToJoin extends React.Component {

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

        <TouchableOpacity style={styles.btnJoin} activeOpacity={0.8} onPress={()=>{}}>
          <Text style={styles.btnJoinText}>REQUEST TO JOIN</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default ClubProfileToJoin;
