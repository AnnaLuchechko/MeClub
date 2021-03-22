import React, {Component} from 'react';
import {Image} from 'react-native'
import {ClubProfileHost} from '@pages';
import { NavigationActions} from 'react-navigation';
import {Logo,DrawerButton} from '@components';

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
}

class ClubProfileHostScreen extends Component {

  static navigationOptions = ({navigation}) => ({
      title: "CLUB PROFILE",
      headerLeft: <Logo onPress={()=>navigateAndResetStack(navigation)}/>,
      headerRight: <DrawerButton navigation={navigation} />
  });

  render() {

    const {navigation, screenProps} = this.props;

    return <ClubProfileHost
            navigation={navigation}
            screenProps={screenProps} />
  }

}

export default ClubProfileHostScreen;
