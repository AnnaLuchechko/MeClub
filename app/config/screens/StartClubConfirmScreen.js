import React, {Component} from 'react';
import {Image} from 'react-native'
import {StartClubConfirm} from '@pages';
import { NavigationActions} from 'react-navigation';
import {Logo,RightButton,HeaderTitle} from '@components';

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
}

class StartClubConfirmScreen extends Component {

  static navigationOptions = ({navigation}) => ({
      title: "FLYING GRANNIES",
      headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
      headerRight: <RightButton icon={require('@assets/ic_hurley.png')} showLabel={true} label="Hurley" onPress={()=>{}}/>,
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

    return <StartClubConfirm
            navigation={navigation}
            screenProps={screenProps} />
  }

}

export default StartClubConfirmScreen;
