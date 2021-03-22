import React, {Component} from 'react';
import {Image} from 'react-native'
import {SetDateTime,Profile} from '@pages';
import {BackButton,RightButton} from '@components';
import {CreateEventState} from "../../forms/CreateEventState";

class SetDateTimeScreen extends Component {
    static navigationOptions = ({navigation}) => ({
      title:'SET DATE & TIME',
      headerLeft:<BackButton onBack={() => navigation.goBack()}/>,
      headerRight: <RightButton icon={CreateEventState.activityIcon()} onPress={()=>{}} />,
      tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('@assets/ic_tab_start_club.png')}
            style={{
              width:35,
              height:35,
            }}
          />
      )
    });

    render() {
        const {navigation, screenProps} = this.props;
        return <SetDateTime navigation={navigation} screenProps={screenProps} nextScreen={() => navigation.navigate('EventSummary')} />
    }

}

export default SetDateTimeScreen;