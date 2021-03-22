import React, {Component} from 'react';
import {Image} from 'react-native'
import {ActivitySearch} from '@pages';
import { NavigationActions} from 'react-navigation';
import {Logo,DrawerButton,ActivityHeaderTitle} from '@components';

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
}

class ActivitySearchScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle:<ActivityHeaderTitle badge={20}/>,
    headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
    headerRight: <DrawerButton navigation={navigation} />,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('@assets/ic_tab_activity.png')}
        style={{
          width:35,
          height:35
        }}
      />
    ),
  });

  render() {
    const {navigation, screenProps} = this.props;
    return <ActivitySearch navigation={navigation} screenProps={screenProps} />
  }

}

export default ActivitySearchScreen;
