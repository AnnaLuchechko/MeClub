import React from 'react'
import {
  View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid
} from 'react-native'
import styles from './style'
import {DashboardItem,DashboardHeader} from '@components'

import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

import { UserRepository } from '../../repositories/User';

import _ from 'lodash';

import Form from './form';

class Profile extends React.Component {
  state = {
      imageSource: {
          uri: ""
      },
      contentHeight: 0,
      user: null
  };

  constructor() {
      super();

      // bind this since we use on TouchableHighlight
      this.editPhoto = this.editPhoto.bind(this);
  }

  getUser(){
      return this.props.screenProps.user;
  }

  componentWillMount() {
      const user = this.getUser();

      this.setState({
          "user": {
              id: user.id,
              name: {
                  first: user.firstName,
                  last: user.lastName
              },
              email: user.email,
              phoneNumber: user.phoneNumber,
              photoUrl: user.photoUrl
          }
      });
  }

  onChange(value) {
      this.setState({"user": value});
  }

  onSave() {
      let origUser = this.getUser();

      let form = this.refs.form;

      let user = form.getValue();

      if (user) { // if validation fails, value will be null
          //console.warn('form model', user); // value here is an instance of User

          if (! _.isEqual(user.email, origUser.email)){

              //console.warn('Updating email since it changed...');

              LoginManager
                  .logInWithReadPermissions(['public_profile', 'email'])
                  .then((result) => {
                      if (result.isCancelled) {
                          return Promise.reject(new Error('The user cancelled the request'));
                      }

                      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

                      // get the access token
                      return AccessToken.getCurrentAccessToken();
                  })
                  .then((data) => {
                      // create a new firebase credential with the token
                      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

                      return firebase.auth().currentUser.reauthenticateWithCredential(credential);
                  })
                  .then((currentUser) => {

                      firebase.auth().currentUser.updateEmail(user.email).then((response) => {
                          console.log(JSON.stringify(response));
                      }).catch((e) => {
                          console.error(e);
                      });
                  })
                  .catch((error) => {
                      alert(`Authentication fail with error: ${error}`);
                      console.error(`Login fail with error: ${error}`);
                  });
          }

          console.log(JSON.stringify(user));

          UserRepository.save(user);

          alert('Saved!');
      }
  }

    editPhoto(){

        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                'title': 'Camera Permission',
                'message': 'MeClub needs access to your camera ' +
                'so you can set your profile photo.'
            }
        ).then((r) => {
            if (r === PermissionsAndroid.RESULTS.GRANTED){
                this.selectPhotoTapped();
            }
        });
    }

    updateUser(data){
        this.setState({
            "user": _.extend({}, this.state.user, data)
        });
    }

    selectPhotoTapped() {

        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            //console.warn('ImagePicker Response', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.warn('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.updateUser({ "photoUrl": 'data:' + response.type + ';base64,' + response.data });
            }
        });
    }

  render(){
      return (
        <View style={styles.container} onLayout={(event) => this.setState({contentHeight:event.nativeEvent.layout.height})}>
          <ScrollView contentContainerStyle={{minHeight:this.state.contentHeight}} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.mainContent}>
              <Image source={require('@assets/ic_profile_border.png')} style={styles.imageBorder}/>

              <TouchableOpacity style={styles.avatar} activeOpacity={0.8} onPress={this.editPhoto}>
                  {_.get(this.state, 'user.photoUrl') ?
                      <Image source={{uri: this.state.user.photoUrl }} style={{flex:1, width:null, height:null, borderRadius:40}}/>
                      : null
                  }
                <Text style={styles.editPhoto}>Edit Photo</Text>
              </TouchableOpacity>

              <Text style={styles.text1}>KNOWLEDGEABLE</Text>
              <Text style={styles.text2}>FRIENDLY</Text>
              <Text style={styles.text3}>RELIABLE</Text>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.inputs}>
              <Form ref="form" value={ this.state.user } onChange={ this.onChange.bind(this) } />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.text}>CONFIRM IDENTITY</Text>
              <TouchableOpacity style={{}} activeOpacity={0.8}>
                <Image source={require('@assets/ic_instagram.png')} style={styles.buttonIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={{}} activeOpacity={0.8}>
                <Image source={require('@assets/ic_facebook.png')} style={styles.buttonIcon}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnHide} activeOpacity={0.8}>
              <Text style={styles.buttontext}>HIDE MY PROFILE</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity onPress={this.onSave.bind(this)}>
              <Image source={require('@assets/ic_proceed.png')} style={styles.imageBottom}/>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )
  }
}

export default Profile;
