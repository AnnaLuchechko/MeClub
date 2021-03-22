import React from 'react';

import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './style';
import { NavigationActions } from 'react-navigation';

class RightButton extends React.Component {

  static defaultProps = {
    showLabel: false,
    icon:require('@assets/ic_drawer.png'),
    label:'',
    onPress:()=>{}
  };

  render(){
    let { icon,label, showLabel, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.btnRight} activeOpacity={0.8} onPress={ () => onPress() }>
        <Image source={icon} style={[styles.icon,!showLabel && {width:30,height:30}]}/>
        {showLabel && <Text style={styles.label}>{label}</Text>}
      </TouchableOpacity>
    )
  }

}

export default RightButton;
