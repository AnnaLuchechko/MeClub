import React, { Component } from 'react';
import { Image } from 'react-native'
import { ActivityMap } from '@pages';
import { Logo, DrawerButton, ActivityHeaderTitle } from '@components';

class ActivityMapScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle:<ActivityHeaderTitle badge={20}/>,
        headerLeft: <Logo />,
        headerRight: <DrawerButton navigation={navigation} />,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('@assets/ic_tab_activity.png')}
                style={{
                    width:35,
                    height:35
                }}
            />
        ),
    });

    render() {
        const { navigation, screenProps } = this.props;
        return <ActivityMap navigation={navigation} screenProps={screenProps} />
    }

}

export default ActivityMapScreen;
