import React, {Component} from 'react';
import {EventConfirm} from '@pages';
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
};

class EventConfirmScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: <HeaderTitle title={navigation.state.params.headerTitle} subTitle={navigation.state.params.subTitle} titleStyle={{textAlign:'center'}}/>,
    headerLeft: <Logo onPress={() => navigateAndResetStack(navigation)}/>,
    headerRight: <DrawerButton navigation={navigation} />,
  });

  componentWillMount() {

      let event = this.props.navigation.state.params.event;

      // pass in some navigation options
      this.props.navigation.setParams({
          headerTitle: event.address,
          subTitle: event.cityStateZip()
      });
  }

  render() {
    const {navigation, screenProps} = this.props;
    return <EventConfirm navigation={navigation} screenProps={screenProps} event={navigation.state.params.event} />
  }
}

export default EventConfirmScreen;