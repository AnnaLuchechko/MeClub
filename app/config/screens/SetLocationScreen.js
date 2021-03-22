import React, {Component} from 'react';
import {SetLocation} from '@pages';
import {BackButton,DrawerButton,HeaderTitle,RightButton} from '@components';
import {CreateEventState} from "../../forms/CreateEventState";

class SetLocationScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      title:"SET YOUR LOCATION",
      headerLeft:<BackButton onBack={()=>navigation.goBack()}/>,
      headerRight: <RightButton icon={CreateEventState.activityIcon()} onPress={()=>{}} />
  });

  render() {
    const {navigation} = this.props;
    return <SetLocation navigation={navigation} nextScreen={() => navigation.navigate('SetDateTime')} />
  }

}

export default SetLocationScreen;