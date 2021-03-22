import React, {Component} from 'react';
import {Image,View} from 'react-native'
import {ListOfChats} from '@pages';
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
}

class ListOfChatsScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title:'CHATS',
        headerLeft:<Logo onPress={()=>navigateAndResetStack(navigation)}/>,
        headerRight: <DrawerButton navigation={navigation} />,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('@assets/ic_tab_chat.png')}
            style={{
              width:35,
              height:35,
            }}
          />
        )
    });

    showDetail(chat){
        // @TODO pass chat
        return this.props.navigation.navigate('ChatDetail');
    }

    render() {
        const {navigation, screenProps} = this.props;
        return <ListOfChats navigation={navigation} screenProps={screenProps} showInfo={(chat) => this.showDetail(chat)} />
    }

}

export default ListOfChatsScreen;
