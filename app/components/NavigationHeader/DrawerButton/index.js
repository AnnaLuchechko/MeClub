import React from 'react';

import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './style';

import {Global,Constants} from '@common';

class DrawerButton extends React.Component {

  static defaultProps = {
    showLive: false
  };

  openDrawer(){
      //this.props.navigation.navigate('DrawerToggle');
      Global.EventEmitter.emit(Constants.EventEmitterName.OpenDrawer)
  }

  render(){
    let { showLive } = this.props;

    return (
      <TouchableOpacity style={styles.btnDrawer} activeOpacity={0.8} onPress={ () => this.openDrawer() }>
        {showLive && <View style={styles.live}><Text style={styles.liveText}>LIVE EVENTS ONLY</Text></View>}
        <Image source={require('@assets/ic_drawer.png')} style={styles.icon}/>
      </TouchableOpacity>
    )
  }

}

export default DrawerButton;
