import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';

import styles from './style';

import {DashboardItem, DashboardHeader} from '@components';

import {CreateEventState} from "../../forms/CreateEventState";

import PropTypes from 'prop-types';

class InviteModal extends React.Component {

  render(){

    return (
      <Modal
        transparent={true}
        visible={this.props.show}
        onRequestClose={()=>{}}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.topRow}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.onClose()}>
              <Image source={require('@assets/ic_close_modal.png')} style={styles.icon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapLogo}>
              {CreateEventState.selectedActivity ?
                  <Image source={{uri: CreateEventState.selectedActivity.icon}} style={styles.logo}/>
              : null }
            <Text style={styles.name}>{CreateEventState.name()}</Text>
          </View>
        </View>

        <View  style={styles.content}>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image source={require('@assets/ic_location.png')} style={styles.icon}/>
              <Text style={styles.text}>LOCATION</Text>
            </View>
            <View style={[styles.rightItem, {width: 120}]}>
              <Text style={[styles.rightItemText]}>
                  {CreateEventState.address}
              </Text>
              <Text style={[styles.rightItemText]}>
                  {CreateEventState.cityStateZip()}
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
                    {CreateEventState.startDate()}
                </Text>
              </View>
            </View>
            <View style={styles.rightView}>
              <Text style={styles.rightItemText1}>{CreateEventState.startTime()}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.item}>
            <Image source={require('@assets/ic_group.png')} style={styles.icon}/>
            <Text style={styles.text}>AGE GROUP</Text>
            </View>
            <View style={[styles.rightItem, {width: 120}]}>
              <Text style={[styles.rightItemText]}>
                  {CreateEventState.ageGroup()}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.rightItem, {width: 120}]}>
              <Text style={[styles.rightItemText]}>
                  {CreateEventState.peopleNeeded()}
              </Text>
            </View>
          </View>

          {CreateEventState.note ?
          <View style={styles.noteWrap}>
            <Text style={styles.note}>{CreateEventState.note}</Text>
          </View>
          : null}

          <View style={styles.bottomView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{}}>
              <Image source={require('@assets/ic_white_facebook.png')} style={styles.btnIcon}/>
              <Text style={styles.btnText}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{}}>
              <Image source={require('@assets/ic_white_instagram.png')} style={styles.btnIcon}/>
              <Text style={styles.btnText}>INSTAGRAM</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{}}>
              <Image source={require('@assets/ic_white_twitter.png')} style={styles.btnIcon}/>
              <Text style={styles.btnText}>TWITTER</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{}}>
              <Image source={require('@assets/ic_mail.png')} style={styles.btnIcon}/>
              <Text style={styles.btnText}>EMAIL</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{}}>
              <Image source={require('@assets/ic_white_chat.png')} style={styles.btnIcon}/>
              <Text style={styles.btnText}>TEXT</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      </Modal>
    )
  }
}

InviteModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};

export default InviteModal;
