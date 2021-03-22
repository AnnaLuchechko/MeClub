import React, { Component } from 'react';
import { Faq } from '@pages';
import { BackButton, RightButton } from '@components';

class FaqScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'FAQ',
        headerLeft: <BackButton onBack={() => navigation.goBack()}/>
    });

    render() {
        const { navigation, screenProps } = this.props;
        return <Faq navigation={navigation} screenProps={screenProps} />
    }

}

export default FaqScreen;
