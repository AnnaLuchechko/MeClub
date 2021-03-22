import React, {Component} from 'react';
import {Profile} from '@pages';
import { NavigationActions} from 'react-navigation';
import {Logo,DrawerButton,HeaderTitle} from '@components';

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
}

class ProfileScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title:"PROFILE",
    headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
    headerRight: <DrawerButton navigation={navigation} />,
  });

  render() {
    const {navigation, screenProps} = this.props;

    return <Profile navigation={navigation} screenProps={screenProps} />
  }
}

export default ProfileScreen;
