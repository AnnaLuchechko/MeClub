import React, {Component} from 'react';
import {Image} from 'react-native'
import {Dashboard} from '@pages';
import {Logo, DrawerButton} from '@components';
import _ from "lodash";
import { EventRepository } from "../../repositories/Event";
import {NavigationActions} from "react-navigation";

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: screen})
        ]
    });
    navigation.dispatch(resetAction);
};

class DashboardScreen extends Component {

    state = {
        events: []
    };

    componentWillMount(){
        // load all for now. @TODO only load on current location and limit it
        EventRepository.all().then((events) => {
            this.setState({ events: events });
        });
    }

    static navigationOptions = ({navigation}) => ({
        title: 'DASHBOARD',
        headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
        headerRight: <DrawerButton navigation={navigation} />,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('@assets/ic_tab_dashboard.png')}
            style={{
              width:35,
              height:35,
            }}
          />
        )
    });

    showEvent(){
        return this.props.navigation.navigate('EventDetail', { eventDetail: _.first(this.state.events) });
    }

    render() {
        const {navigation, screenProps} = this.props;
        return (
            <Dashboard
                navigation={navigation}
                // @TODO update below when events in Dashboard are dynamic
                //showInfo={(eventDetail) => navigation.navigate('EventDetail', { eventDetail: eventDetail })}
                showInfo={(eventDetail) => this.showEvent() }
                screenProps={screenProps} />
        );
    }

}

export default DashboardScreen;
