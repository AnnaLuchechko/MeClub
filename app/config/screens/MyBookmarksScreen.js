import React, {Component} from 'react';
import {Image} from 'react-native'
import {MyBookmarks} from '@pages';
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

class MyBookmarksScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:"MY BOOKMARKS",
    headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
    headerRight:<DrawerButton navigation={navigation}/>,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('@assets/ic_tab_activity.png')}
        style={{
          width:35,
          height:35
        }}
      />
    ),
  })

  render() {
    const {navigation} = this.props;
    return <MyBookmarks
            navigation={navigation} />
  }

}

export default MyBookmarksScreen;
