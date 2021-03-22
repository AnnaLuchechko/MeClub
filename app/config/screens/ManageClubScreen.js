import React, {Component} from 'react';
import {Image} from 'react-native'
import {ManageClub} from '@pages';
import { NavigationActions} from 'react-navigation';
import {LeftButton,DrawerButton} from '@components';

class ManageClubScreen extends Component {

  static navigationOptions = ({navigation}) => ({
      title: "MANAGE CLUB",
      headerLeft: <LeftButton icon={require('@assets/ic_hurley.png')} showLabel={true} label="Hurley" onPress={()=>{}}/>,
  });

  render() {

    const {navigation, screenProps} = this.props;

    return <ManageClub
            navigation={navigation}
            screenProps={screenProps} />
  }

}

export default ManageClubScreen;
