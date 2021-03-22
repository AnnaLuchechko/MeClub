import React, {Component} from 'react';
import {Image} from 'react-native'
import firebase from 'react-native-firebase';

import {EventSummary} from '@pages';
import {BackButton,RightButton,HeaderTitle} from '@components';
import {CreateEventState} from "../../forms/CreateEventState";
import {EventRepository} from "../../repositories/Event";
import {Event} from "../../repositories/Event";

class EventSummaryScreen extends Component {

    state = {
        isSaving: false
    };

    static navigationOptions = ({navigation}) => ({
      headerTitle: <HeaderTitle title={EventSummaryScreen._getEventTitle()} subTitle={EventSummaryScreen._getEventSubTitle()} />,
      headerLeft: <BackButton onBack={() => navigation.goBack()}/>,
      headerRight: EventSummaryScreen._getEventHeaderLogo(),
      tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('@assets/ic_tab_activity.png')}
              style={{
                  width:35,
                  height:35
              }}
          />
      )
    });

    static _getEventHeaderLogo(){
        // @TODO get Club logo if available

        return null;

        return (
            <RightButton icon={require('@assets/ic_hurley.png')} showLabel={true} label="Hurley" onPress={()=>{}} />
        );
    }

    static _getEventTitle(){
      return "SUMMARY: " + CreateEventState.name();
    }

    static _getEventSubTitle(){
        let parts = [
            CreateEventState.selectedCategory,
            CreateEventState.selectedLevel
        ];
        return parts.join(', ');
    }

    saveEvent(){
        console.log('Saving event...');

        this.setState({
            isSaving: true
        });

        let doc = new Event({
            activity: firebase.firestore().collection('activities').doc(CreateEventState.selectedActivity.id),
            categories: [CreateEventState.selectedCategory],
            ageFrom: _.parseInt(CreateEventState.ageFrom),
            ageTo: _.parseInt(CreateEventState.ageTo),
            address: CreateEventState.address,
            city: CreateEventState.city,
            state: CreateEventState.state,
            zip: CreateEventState.zip,
            country: CreateEventState.country,
            starts: CreateEventState.starts ? CreateEventState.starts : null,
            ends: CreateEventState.ends ? CreateEventState.ends : null,
            latlng: new firebase.firestore.GeoPoint(CreateEventState.latitude, CreateEventState.longitude),
            location: CreateEventState.location,
            note: CreateEventState.note,
            people: _.parseInt(CreateEventState.people),
            isPrivate: CreateEventState.isPrivate,
            user: firebase.firestore().collection('users').doc(this.props.screenProps.user.id)
        });

        EventRepository.upsert(doc.id, doc)
            .then((doc) => {

                this.setState({
                    isSaving: false
                });

                this.props.navigation.navigate('ActivityMap', {
                    showEventShareModal: true,
                    event: doc
                });
            }).catch(function(error) {
                console.error("Error upserting document: ", error);
            });
    }

    render() {

        const {navigation, screenProps} = this.props;

        return <EventSummary
                navigation={navigation}
                next={this.saveEvent.bind(this)}
                screenProps={screenProps}
                isSaving={this.state.isSaving} />
    }

}

export default EventSummaryScreen;