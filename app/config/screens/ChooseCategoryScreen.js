import React, {Component} from 'react';
import {ChooseCategory,Profile} from '@pages';
import { NavigationActions} from 'react-navigation';
import {Logo,RightButton} from '@components';
import {CreateEventState} from "../../forms/CreateEventState";

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
}

class ChooseCategoryScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title:'CHOOSE CATEGORY',
        headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
        headerRight: <RightButton icon={CreateEventState.activityIcon()} onPress={()=>{}} />
    });

    render() {
        const {navigation, screenProps} = this.props;
        return <ChooseCategory navigation={navigation} screenProps={screenProps} showSetLocation={()=>navigation.navigate('SetLocation')}/>
    }

}

export default ChooseCategoryScreen;