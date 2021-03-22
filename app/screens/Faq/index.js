import React from 'react';

import {
    View,
    Text,
    ScrollView
} from 'react-native'

import styles from './style';

const questions = [
    {
        'q' : "Why it is called MeClub!",
        'a' : "We are building a user-centric platform that takes the best ingredients from the traditional “club” concept, a protected place for like-minded people or any like-minded group to find the appropriate partner or group for healthy activities.\n\nMeClub! is also about communities and the individual that belongs to many, one of which may be a high school, college, a soccer organization, a car club or enterprise.\n\nThere is no “socializing”, no digging for relevant information. It’s super simple. You come here, and you’ll find what you need.",
    },{
        "q" : "Where is MeClub! active?",
        "a" : "We are headquartered on the US West Coast but the platform sees increasing traction worldwide.",
    },{
        "q" : "MeClub! is a new platform. How can I present myself as a trustworthy person?",
        "a" : "The best way is to complete your account/profile incl. links to your Facebook and Instagram accounts. This will allow other people on MeClub! to learn a bit about yourself.",
    },{
        "q" : "What do I see on the homepage?",
        "a" : "A map of your current location and activities happening within a certain perimeter.",
    },{
        "q" : "What are the activity icons on the map?",
        "a" : "Each icon represents an activity posted by an individual, club/group or organization?",
    },{
        "q" : "How do I find more details about an activity?",
        "a" : "After you click on any activity icon on the map, an information window will display the activity details such as time, location, expertise level, age group. You can also connect with the host via chat.",
    },{
        "q" : "How do I change location?",
        "a" : "You can type in any city, country, business, public site, activity, hostname in the search bar on top and the map will take you there.",
    },{
        "q" : "How can I find my favorite activity?",
        "a" : "By default you will first see random types of activities. If you want to change the activities, simply click on the “+” icon at the bottom of the home page. This will direct you to an activity library with many selections you may find interesting.",
    },{
        "q" : "I want to post an activity as individual.",
        "a" : "Click on the “Post activity” button at the bottom of the home page. It will take you to the “Create Activity” page with activities and sub-categories to choose from.",
    },{
        "q" : "I only want personally invited people to see my activity.",
        "a" : "When you create an activity, choose the “secret” viewing mode. Your activity will only be visible to personally invited people.",
    },{
        "q" : "How can I personally invite people to join my activity?",
        "a" : "After you have created and posted an activity you will be able to share your activity details with certain people on your phone’s contact list.",
    },{
        "q" : "I am a group host or I represent an organization. How can I post an activity?",
        "a" : "Click on the “Start a club” icon at the bottom of the main page. Then you will be able to name and describe your group or organization. You can also add a logo/avatar and post your public or secret group activity.",
    },{
        "q" : "Can I invite myself to an activity that I am interested in?",
        "a" : "If this activity is a one-on-one (managed) event, the host will be able to invite you after you both exchanged some initial information and you seem to be a good fit. If the event is for a larger group of people (unmanaged), you can simply join.",
    },{
        "q" : "I am not quite comfortable yet connecting with new people.",
        "a" : "In the other person’s profile you can find out how other people have rated her/him. Additionally, you can review the other person’s public Facebook and Instagram accounts.",
    },{
        "q" : "How can I accept a potential activity partner?",
        "a" : "After the potential partner contacts you via chat, we recommend you first exchange some initial messages. Once you are comfortable with the other person, simply click the “Invite” button, which also exports your event into your phone calendar.",
    },{
        "q" : "How often can I rate a person?",
        "a" : "Once per activity.",
    },{
        "q" : "What is a “club” and how can I join?",
        "a" : "A club is any group small or large that is on MeClub! If you are not a member of any club yet, go to the navigation (menu) and choose “My Clubs” which will take you to the “Clubs” page, which lists public clubs. Once you find your perfect club, you can request an invitation from the club host.  ",
    }
];

class Faq extends React.Component {

    state = {
        'questions' : questions
    };

    render(){
        return (
            <ScrollView style={ styles.container } contentContainerStyle={{paddingBottom:20}}>
                {
                    this.state.questions.map((faq, i) => {
                        return (
                            <View key={ i }>
                                <Text style={ styles.questionText }>{ faq.q }</Text>
                                <Text style={ styles.answerText }>{ faq.a }</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        )
    }
}

export default Faq;
