import React, {Component} from 'react';
import {Image} from 'react-native'
import {MyClub} from '@pages';
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

class MyClubScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'My Club',
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
    return <MyClub navigation={navigation} screenProps={screenProps} />
  }

}

export default MyClubScreen;
