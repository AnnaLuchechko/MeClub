import React from 'react';
import { Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DashboardScreen from './screens/DashboardScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import EventConfirmScreen from './screens/EventConfirmScreen';
import ListOfChatsScreen from './screens/ListOfChatsScreen';
import ActivitySearchScreen from './screens/ActivitySearchScreen';
import StartAClubScreen from './screens/StartAClubScreen';
import MyClubScreen from './screens/MyClubScreen';
import AddActivityScreen from './screens/AddActivityScreen';
import ProfileScreen from './screens/ProfileScreen';
import ActivityMapScreen from './screens/ActivityMapScreen';
import ManageActivitiesScreen from './screens/ManageActivitiesScreen';
import MyBookmarksScreen from './screens/MyBookmarksScreen';
import SetLocationScreen from './screens/SetLocationScreen';
import EventSummaryScreen from './screens/EventSummaryScreen';
import ActivitiesListScreen from './screens/ActivitiesScreen';
import SetDateTimeScreen from './screens/SetDateTimeScreen';
import ClubsScreen from './screens/ClubsScreen';
import StartClubConfirmScreen from './screens/StartClubConfirmScreen';
import PostActivityScreen from './screens/PostActivityScreen';
import FaqScreen from './screens/FaqScreen';
import MyGalleryScreen from './screens/MyGalleryScreen';
import ClubProfileToJoinScreen from './screens/ClubProfileToJoinScreen';
import ClubProfileHostScreen from './screens/ClubProfileHostScreen';
import ClubEventsScreen from './screens/ClubEventsScreen';
import ManageClubScreen from './screens/ManageClubScreen';
import MembersScreen from './screens/MembersScreen';
import ChooseCategoryScreen from './screens/ChooseCategoryScreen';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
});

//stack objCarrier
const DashboardStack = StackNavigator({
    Dashboard: {screen: DashboardScreen},
    EventConfirm:{screen:EventConfirmScreen},
    EventDetail:{screen:EventDetailScreen},
    default:{screen:ActivityMapScreen}
}, {
  headerMode: 'none',
});

const ROUTE_CONFIG_MAIN = {
    default: {
        screen: ActivityMapScreen
    },
    ActivitiesList: {
        screen: ActivitiesListScreen
    },
    ActivityMap: {
        screen: ActivityMapScreen
    },
    ActivitySearch: {
        screen: ActivitySearchScreen
    },
    AddActivity: {
        screen: ActivitiesListScreen
    },
    Clubs: {
        screen: ClubsScreen
    },
    Dashboard: {
        screen: DashboardStack
    },
    EventDetail: {
        screen:EventDetailScreen
    },
    EventSummary: {
        screen: EventSummaryScreen
    },
    EventConfirm: {
        screen: EventConfirmScreen
    },
    Faq: {
        screen: FaqScreen
    },
    ListOfChats: {
        screen: ListOfChatsScreen
    },
    MyAccount: {
        screen: ProfileScreen
    },
    MyBookmarks: {
        screen: MyBookmarksScreen
    },
    MyClub: {
        screen: MyClubScreen
    },
    MyGallery: {
        screen: MyGalleryScreen
    },
    PostActivity: {
        screen: AddActivityScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    SetDateTime: {
        screen: SetDateTimeScreen
    },
    SetLocation: {
        screen: SetLocationScreen
    },
    StartAClub: {
        screen: StartAClubScreen
    },
    StartClubConfirm: {
        screen: StartClubConfirmScreen
    },
    ClubProfileToJoin: {
        screen: ClubProfileToJoinScreen
    },
    ClubProfileHost: {
        screen: ClubProfileHostScreen
    },
    ClubEvents: {
        screen: ClubEventsScreen
    },
    ManageClub: {
        screen: ManageClubScreen
    },
    Members: {
        screen: MembersScreen
    },
    ChooseCategory: {
        screen: ChooseCategoryScreen
    },
};

export default StackNavigator(ROUTE_CONFIG_MAIN,
    {
        mode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#000819",
                borderBottomWidth: 0
            },
            headerTintColor: "white",
            headerTitleStyle: { alignSelf: "center", fontWeight:'normal', fontSize:14 },
        }
    }
);
