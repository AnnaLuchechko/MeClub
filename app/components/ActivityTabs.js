import React, { Component } from 'react';

import { View, StyleSheet, Image, ScrollView } from 'react-native';

import { ActivityTab } from '@components';

import PropTypes from 'prop-types';
import { ActivityRepository } from "../repositories/Activity";
import {NavigationActions} from 'react-navigation'

const styles = StyleSheet.create({
    tabContainer: {
        height: 80,
        backgroundColor: '#08062c',
        marginTop:5,
        marginLeft: 2,
        marginRight: 2
    },
    activity: {
        width: 66,
        height: 78,
        marginHorizontal: 3
    }
});

class ActivityTabs extends Component {

    state = {
        activities: []
    };

    componentWillMount(){

        // load all activities for now, @TODO just load the user's saved activities
        ActivityRepository.all().then((activities) => {
            this.setState({ activities: activities });
        });
    }

    renderActivityIcon(activity, idx){
        return (
            <Image key={ idx } source={{ uri: activity.icon }} style={ styles.activity } />
        );
    }

    navigateTo(routeName){
        return this.props.navigation.navigate(routeName);
    }

    navigateAndResetStack(routeName){
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({routeName})
          ]
        });
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View>
                <ScrollView horizontal={true} style={ styles.tabContainer }>
                    <ActivityTab title="CHATS" image={require('@assets/ic_tab_chat.png')} onPress={ () => this.navigateTo('ListOfChats') } />
                    <ActivityTab title="CREATE ACTIVITY" image={require('@assets/ic_tab_activity.png')} onPress={ () => this.navigateAndResetStack('PostActivity') } />
                    <ActivityTab title="START CLUB" image={require('@assets/ic_tab_start_club.png')} onPress={ () => this.navigateTo('StartAClub') } />
                    <ActivityTab title="MY CLUBS" image={require('@assets/ic_tab_my_club.png')} onPress={ () => this.navigateTo('MyClub') } />
                    <ActivityTab title="DASHBOARD" image={require('@assets/ic_tab_dashboard.png')} onPress={ () => this.navigateTo('Dashboard') } />
                    <ActivityTab title="CUSTOMIZE ACTIVITIES" image={require('@assets/ic_tab_add.png')} onPress={ () => this.navigateTo('AddActivity') } />
                    {this.state.activities.map(this.renderActivityIcon)}
                </ScrollView>
            </View>
        )
    }
}

export default ActivityTabs;
