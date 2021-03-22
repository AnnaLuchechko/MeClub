import React, {Component} from 'react';
import {Image} from 'react-native'
import {StartAClub} from '@pages';
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

class StartAClubScreen extends Component {

  static navigationOptions = ({navigation}) => ({
      title: "START CLUB",
      headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
      headerRight:<DrawerButton navigation={navigation}/>,
      tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('@assets/ic_tab_start_club.png')}
              style={{
                  width:35,
                  height:35
              }}
          />
      ),
  });

  render() {

    const {navigation, screenProps} = this.props;

    return <StartAClub
            navigation={navigation}
            screenProps={screenProps} />
  }

}

export default StartAClubScreen;
