import React, { Component } from 'react';
import { MyGallery } from '@pages';
import { BackButton, RightButton } from '@components';

class MyGalleryScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'MY GALLERY',
        headerLeft: <BackButton onBack={() => navigation.goBack()}/>
    });

    render() {
        const { navigation, screenProps } = this.props;
        return <MyGallery navigation={navigation} screenProps={screenProps} />
    }

}

export default MyGalleryScreen;
