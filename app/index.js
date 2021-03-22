import React from 'react';
import Routers from './config/routes';
import { View } from 'react-native';
import firebase from 'react-native-firebase';
import JoinScreen from './screens/Join';
import { UserRepository } from './repositories/User';
import _ from 'lodash';
import Drawer from 'react-native-drawer'
import {RightMenu} from '@pages'
import {Global,Constants} from '@common'

export default class App extends React.Component {

    constructor() {
        super();

        this.unsubscriber = null;

        this.state = {
            user: null,
            showDrawer:false
        };
    }

    updateUser(user, firebaseAuthUser){

        if (! user){
            // user entity not in Firebase

            // save the user's profile into the database so we can list users, use them in Security and Firebase Rules, show profiles, etc.

            return UserRepository
                .upsert(firebaseAuthUser.uid, {
                    email: firebaseAuthUser.email,
                    displayName: firebaseAuthUser.displayName,
                    photoUrl: firebaseAuthUser.photoURL
                })
                .then((doc) => this.loadUserById(firebaseAuthUser.uid));
        }

        //console.warn(JSON.stringify(user));

        this.setState({"user": user});
    }

    loadUserById(id){
        UserRepository
            .find(id)
            .then((user) => this.setState({ user: user }));

    }

    componentWillMount(){

        // load test user from Firebase @TODO remove on launch

        this.loadUserById('NCLRGKO1wqfF9hB7QSCWshq8nqZ2');
    }

    /**
     * Listen for any auth state changes and update component state.
     */
    componentDidMount() {
      //Drawer sub event
      this.sideDrawerOpenListener = Global.EventEmitter.addListener(Constants.EventEmitterName.OpenDrawer, this.openDrawerMenu.bind(this));
      this.sideDrawerCloseListener = Global.EventEmitter.addListener(Constants.EventEmitterName.CloseDrawer, this.closeDrawerMenu.bind(this));
      this.onLogout = Global.EventEmitter.addListener(Constants.EventEmitterName.Logout, this.logout.bind(this));

        this.unsubscriber = firebase.auth().onAuthStateChanged((firebaseAuthUser) => {
            if (firebaseAuthUser){
                UserRepository
                    .find(firebaseAuthUser.uid)
                    .then((user) => this.updateUser(user, firebaseAuthUser));

            } else {
                this.setState({ user: null });
            }
        });
    }

    componentWillUnmount() {
      //Remove drawer event
      this.sideDrawerOpenListener.remove();
      this.sideDrawerCloseListener.remove();
      this.onLogout.remove();

        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }

    render() {

        if (! this.state.user) {
            return <JoinScreen />;
        }

        return (
          <Drawer
            ref="drawer"
            type="static"
            tapToClose={true}
            openDrawerOffset={0.5}
            panCloseMask={0.5}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
              main: {opacity: 1},
              mainOverlay: {opacity: ratio / 2,backgroundColor: '#000819'},
            })}
            content={<RightMenu screenProps={ {"user": this.state.user} } goToScreen={this.goToScreen.bind(this)} closeDrawerMenu={this.closeDrawerMenu.bind(this)} />}
            open={this.state.showDrawer}
            side="right">
            <Routers ref={'navigator'} screenProps={ {"user": this.state.user} } />
          </Drawer>
        );
    }

    openDrawerMenu(){
      this.setState({showDrawer:true})
    }

    closeDrawerMenu(){
      this.setState({showDrawer:false})
    }

    logout(){
      this.setState({user:null})
    }

    goToScreen(routeName, params = undefined) {
      const {navigator} = this.refs;
      if (!navigator) {
        return;
      }
      navigator.dispatch({type: 'Navigation/NAVIGATE', routeName, params});

      this.closeDrawerMenu();
    }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
}
