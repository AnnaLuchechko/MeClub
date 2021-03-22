import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './style';
import { Constants } from '@common';
import {CreateEventState} from "../../forms/CreateEventState";
import {FindOutMoreModal} from '@components'

class SetLocation extends React.Component {

  marker = null; // Event Location Map Marker

  constructor(props){
    super(props);

    this.state = {
        containerHeight: 0,
        locationText: null,
        location: Constants.INITIAL_MAP_REGION,
        info: {
          title: null, // for map marker
          description: null // for map marker
        },
        form: CreateEventState,
        isShowModal:false
    };
  }

  componentDidMount() {

      if (Platform.OS === 'android') {
          PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                  title: "Your Location",
                  message: "MeClub needs access to your location so you can see the map."
              }
          ).then(granted => {
              if (granted){
                  console.log('Granted! looking up current', granted);
                  this.updatePosition();
              }
          });

      } else {
          this.updatePosition();
      }
  }

  addressPart(components, name){
    let part = null;

    const componentByType = function(type){
      return _.find(components, function(item){ return _.includes(item.types, type); });
    };

    switch (name){
        case 'address':
            part = [
                _.get(componentByType('street_number'), 'short_name'),
                _.get(componentByType('route'), 'short_name')
            ].join(' ');
        break;

        case 'city':
            part =_.get(componentByType('locality'), 'short_name');
        break;

        case 'state':
            part =_.get(componentByType('administrative_area_level_1'), 'short_name');
        break;

        case 'zip':
            part =_.get(componentByType('postal_code'), 'short_name');
        break;

        case 'country':
            part =_.get(componentByType('country'), 'short_name');
        break;
    }

    return part;
  }

    /**
     * Callback when user chooses an AutoComplete item from Google Places API.
     * @param data
     * @param details
     */
  onAutoCompleteSelect(data, details){

      //console.warn(JSON.stringify(data));
      //console.warn(JSON.stringify(details));

      this.marker.hideCallout();

      let addressComponents = details.address_components;

      // save location name to shared state
      this._updateFormState({
          fullAddress: _.get(details, 'formatted_address'),
          address: this.addressPart(addressComponents, 'address'),
          city: this.addressPart(addressComponents, 'city'),
          state: this.addressPart(addressComponents, 'state'),
          zip: this.addressPart(addressComponents, 'zip'),
          country: this.addressPart(addressComponents, 'country'),
          location: _.get(data, 'structured_formatting.main_text', data.description)
      });

      if (_.get(details, 'geometry')){

          let location = {
              latitude: _.get(details, 'geometry.location.lat'),
              longitude: _.get(details, 'geometry.location.lng'),
              latitudeDelta: Constants.LATITUDE_DELTA,
              longitudeDelta: Constants.LONGITUDE_DELTA,
          };

          this.setState({
              info: {
                  title: _.get(data, 'structured_formatting.main_text', data.description),
                  description: _.get(details, 'formatted_address')
              },
              location: location
          });

          // update location coords in shared state
          this._updateFormState({
              latitude: location.latitude,
              longitude: location.longitude
          });

      } else {
          this.setState({ location: null });
      }

      // @TODO set zoom level?
  }

  updatePosition(permissionResponse){
      console.log('Fine Location permission: ', permissionResponse);

      navigator.geolocation.getCurrentPosition(
          position => {
              console.log('Got position:', position);

              let newLocation = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: Constants.LATITUDE_DELTA,
                  longitudeDelta: Constants.LONGITUDE_DELTA
              };

              this.setState({
                  location: newLocation,
                  info: {
                      title: 'Your Location',
                      description: null
                  }
              });
          },
          (error) => console.log(error.message),
          Constants.GEOLOCATION_OPTIONS
      );

      // See: https://github.com/airbnb/react-native-maps/issues/1033
      // Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a repaint.
      setTimeout(() => this.setState({ containerHeight: 1 }), 250);
  }

  render(){

    return (
      //Setting a value (padding) we can change to force a repaint
      <View style={[styles.container, { paddingBottom: this.state.containerHeight }]}>

            <GooglePlacesAutocomplete
                ref="autoCompleteInput"
                placeholder="Type in any address, public site or business"
                minLength={3}
                autoFocus={false}
                returnKeyType="search"
                fetchDetails={true}
                styles={{
                    container: {
                      flex: 0
                    },
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        width: 250,
                        marginLeft: 0,
                        alignSelf:'center',
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        borderRadius: 3,
                        backgroundColor: 'white',
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 5,
                        height: 30,
                        fontSize: 12
                    },
                    listView: {},
                    description: {
                        fontSize: 12,
                        color: 'white'
                    },
                    predefinedPlacesDescription: {
                        color: 'white'
                    },
                    poweredContainer: {
                        height: 0,
                        width: 0,
                        display: "none"
                    }
                }}
                currentLocation={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: Constants.GOOGLE_PLACE_KEY,
                    language: 'en' // language of the results
                }}
                onPress={this.onAutoCompleteSelect.bind(this)}
                value={this.state.form.location}
                enablePoweredByContainer={false}
                predefinedPlacesAlwaysVisible={false}
            />

          <Text style={styles.text}>Or drag pin and discuss details later</Text>
          <View style={styles.content}>
              <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={ true }
                followsUserLocation={ true }
                showsMyLocationButton={ true }
                showsScale={ true }
                showsTraffic={ false }
                style={ styles.map }
                mapType={ "standard" }
                region={ this.state.location }
                zoomEnabled={ true }
              >
                <MapView.Marker ref={(ref) => this.marker = ref}
                    draggable
                    onDragEnd={this.onDragEnd.bind(this)}
                    pinColor="blue"
                    key={'searchedLocation'}
                    coordinate={this.state.location}
                    title={this.state.info.title}
                    description={this.state.info.description}
                    onPress={(e)=>{this.setState({isShowModal:true})}}/>
              </MapView>
          </View>
          <TouchableOpacity style={styles.btnProceed} onPress={() => this.props.nextScreen()}>
              <Image source={require('@assets/ic_proceed.png')} style={styles.icon}/>
          </TouchableOpacity>
          <FindOutMoreModal isShow={this.state.isShowModal} onHide={()=>this.setState({isShowModal:false})} onFindOutMore={()=>this.setState({isShowModal:false})}/>
      </View>
    );
  }

  onDragEnd(e){
    let location = e.nativeEvent.coordinate;

    //console.warn('Drag End', location);

    this._updateFormState({
        location: null, // reset location poi name
        latitude: location.latitude,
        longitude: location.longitude
    });
  }

  _updateFormState(data){
    this.setState({
        form: _.merge(this.state.form, data)
    });
  }

}

SetLocation.propTypes = {
    nextScreen: PropTypes.func
};

export default SetLocation;
