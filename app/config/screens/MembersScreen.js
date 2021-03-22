import React, {Component} from 'react';
import {Image} from 'react-native'
import {Members} from '@pages';
import { NavigationActions} from 'react-navigation';
import {LeftButton,DrawerButton} from '@components';

class MembersScreen extends Component {

  static navigationOptions = ({navigation}) => ({
      title: "MEMBERS",
      headerLeft: <LeftButton icon={require('@assets/ic_hurley.png')} showLabel={true} label="Hurley" onPress={()=>{}}/>,
      headerRight: <DrawerButton navigation={navigation} />
  });

  render() {

    const {navigation, screenProps} = this.props;

    return <Members
            navigation={navigation}
            screenProps={screenProps} />
  }

}

export default MembersScreen;
