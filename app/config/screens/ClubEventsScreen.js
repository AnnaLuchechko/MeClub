import React, {Component} from 'react';
import {Image} from 'react-native'
import {ClubEvents} from '@pages';
import { NavigationActions} from 'react-navigation';
import {LeftButton,DrawerButton} from '@components';

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
}

class ClubEventsScreen extends Component {

  static navigationOptions = ({navigation}) => ({
      title: "CLUB EVENTS",
      headerLeft: <LeftButton icon={require('@assets/ic_hurley.png')} showLabel={true} label="Hurley" onPress={()=>{}}/>,
      headerRight: <DrawerButton navigation={navigation} />
  });

  render() {

    const {navigation, screenProps} = this.props;

    return <ClubEvents
            navigation={navigation}
            screenProps={screenProps} />
  }

}

export default ClubEventsScreen;
