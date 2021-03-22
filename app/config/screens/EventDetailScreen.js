import React, {Component} from 'react';
import {EventDetail} from '@pages';
import {BackButton,DrawerButton,HeaderTitle} from '@components';

class EventDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
      headerTitle: <HeaderTitle title={navigation.state.params.headerTitle} subTitle={navigation.state.params.headerSubTitle} />,
      headerLeft: <BackButton onBack={() => navigation.goBack()}/>,
      headerRight: <DrawerButton navigation={navigation} />,
    });

    componentDidMount() {

        let event = this.props.navigation.state.params.eventDetail;

        // pass in some navigation options dynamically
        event.activityName()
            .then(name => {
                this.props.navigation.setParams({
                    headerTitle: name,
                    headerSubTitle: event.quickFacts()
                });
             });
    }

    render() {
        const {navigation, screenProps} = this.props;

        return <EventDetail
                navigation={navigation}
                eventConfirm={() => navigation.navigate('EventConfirm', {
                    event: navigation.state.params.eventDetail
                })}
                screenProps={screenProps} />
    }

}

export default EventDetailScreen;