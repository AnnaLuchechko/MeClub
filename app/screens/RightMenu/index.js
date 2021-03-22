import React, {Component} from 'react';

import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    Linking
} from 'react-native';

import _ from 'lodash';

import styles from "./style";
import {EventRepository} from "../../repositories/Event";
import {Global,Constants} from '@common'

class RightMenu extends Component {

  state = {
      events: []
  };

  getUser(){
      return this.props.screenProps.user;
  }

  componentWillMount(){
      // load all for now so we can test screens. @TODO remove upon launch
      EventRepository.all().then((events) => {
          this.setState({ events: events });
      });
  }

  showMockEvent(){
      return this.props.goToScreen('EventDetail', { eventDetail: _.first(this.state.events) });
  }

  render() {
    let { goToScreen } = this.props;

    return (
      <ScrollView style={styles.container}>
          <Image source={{uri: this.getUser().photo }} style={styles.avatar} />
          <Text style={styles.name}>{ this.getUser().fullName }</Text>

        <View style={styles.content}>
          <TouchableOpacity onPress={()=>goToScreen("Profile")} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_my_account.png')} style={styles.icon}/>
            <Text style={styles.itemText}>My Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>goToScreen("Dashboard")} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_my_agenda.png')} style={styles.icon}/>
            <Text style={styles.itemText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>goToScreen("MyClub")} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_my_clubs.png')} style={styles.icon}/>
            <Text style={styles.itemText}>My Clubs</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>goToScreen("MyGallery")} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_my_gallery.png')} style={styles.icon}/>
            <Text style={styles.itemText}>My Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>goToScreen("Faq")} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
            <Text style={styles.itemText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.openMail('support@meclub.com')} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_support.png')} style={styles.icon}/>
            <Text style={styles.itemText}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.openMail('feedback@meclub.com')} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_feedback.png')} style={styles.icon}/>
            <Text style={styles.itemText}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{Global.EventEmitter.emit(Constants.EventEmitterName.Logout)}} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_logout.png')} style={styles.icon}/>
            <Text style={styles.itemText}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>goToScreen("MyBookmarks")} style={styles.item}>
            <Image source={require('@assets/menu/ic_menu_my_bookmark.png')} style={styles.icon}/>
            <Text style={styles.itemText}>My Bookmarks</Text>
          </TouchableOpacity>

            {
              /** Items below are only for easy access / review @TODO remove on launch */
            }

            <Text style={[ styles.item, { fontSize: 13, color: "red" } ]}>-- Other Screen Shortcuts --</Text>

            <TouchableOpacity onPress={()=>goToScreen("ActivitiesList")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Activities - List</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("AddActivity")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Activities - Add</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("PostActivity")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Activities - Create</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("ListOfChats")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Chats - List</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("Clubs")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Clubs - Search</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("StartAClub")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Clubs - Start</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("StartClubConfirm")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Clubs - Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("EventConfirm")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Events - Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => this.showMockEvent() } style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Events - Detail</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("SetDateTime")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Events - Set Date Time</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("ClubProfileToJoin")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Club Profile To Join</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("ClubProfileHost")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Club Profile Host</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("ClubEvents")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Club Events</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("ManageClub")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Manage Club</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("Members")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Members</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goToScreen("EventSummary")} style={styles.item}>
                <Image source={require('@assets/menu/ic_menu_faq.png')} style={styles.icon}/>
                <Text style={styles.itemText}>Event Summary</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }


  openMail(email){
    let url = 'mailto:' + email;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          alert("not supported")
        } else {
          Linking.openURL(url)
            .then((data) => {})
            .catch(()=>{});
        }
      })
      .catch(()=>{});
  }

}

export default RightMenu;
