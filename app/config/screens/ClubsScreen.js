import React, {Component} from 'react';
import {Image} from 'react-native'
import {Clubs} from '@pages';
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

class ClubsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'CLUBS',
    headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('@assets/ic_tab_my_club.png')}
        style={{
          width:35,
          height:35,
        }}
      />
    ),
  })

  render() {
    const {navigation, screenProps} = this.props;
    return <Clubs navigation={navigation} screenProps={screenProps} />
  }

}

export default ClubsScreen;
