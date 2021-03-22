import React, {Component} from 'react';
import {Image} from 'react-native'
import {AddActivity} from '@pages';
import { NavigationActions} from 'react-navigation';
import {Logo,DrawerButton} from '@components';

const navigateAndResetStack = function(navigation, screen = 'default'){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen})
      ]
    });
    navigation.dispatch(resetAction)
};

class AddActivityScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title:'Create Activity',
        headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
        headerRight: <DrawerButton navigation={navigation} />,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('@assets/ic_tab_add.png')}
            style={{
              width:35,
              height:35,
            }}
          />
        )
    });

    render() {
        const {navigation, screenProps} = this.props;
        return <AddActivity navigation={navigation} screenProps={screenProps} nextScreen={() => this.props.navigation.navigate('ChooseCategory')} />
    }

}

export default AddActivityScreen;
