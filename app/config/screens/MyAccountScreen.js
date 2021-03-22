import React, { Component } from 'react';
import { Profile } from '@pages';
import { BackButton, RightButton } from '@components';

class MyAccountScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'My Account',
        headerLeft: <BackButton onBack={() => navigation.goBack()}/>
    });

    render() {
        const { navigation, screenProps } = this.props;
        return <Profile navigation={navigation} screenProps={screenProps} />
    }

}

export default MyAccountScreen;
