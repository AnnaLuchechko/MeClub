/**
 * Import external dependencies.
 */
import React, { Component } from "react";

import * as _ from 'lodash';

import {
    Platform,
    PermissionsAndroid,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Geocoder from 'react-native-geocoder';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

/**
 * Import local dependencies.
 */
import { Constants } from "@common";
import { UserRepository } from "../../repositories/User";
import { ActivityRepository } from "../../repositories/Activity";
import { EventRepository } from "../../repositories/Event";
import { ActivityTabs } from "@components";
import { InviteModal } from '@pages';

let { width, height } = Dimensions.get('window');

import styles from './style';

class ActivityMap extends Component {

    state = {
        containerHeight: 0,
        mounted: false,
        location: null,
        locationCoords: null,
        region: Constants.INITIAL_MAP_REGION,
        myPosition: null,
        defaultTabs: [

        ],
        activities: [],
        events: [],
        defaultSuggestions: [],
        suggestions: [], // for autocomplete
        selectedTimeIndex: 0,
        pickerValue: "",
        showEventShareModal: false
    };

    componentWillMount(){
        this.setState({
            showEventShareModal: _.get(this.props.navigation, 'state.params.showEventShareModal', false)
        });
    }

    // @TODO - rung slider on right overlay for date filtering
    getUser(){
        return this.props.screenProps.user;
    }

    constructor() {
        super();

        // bind this since we use on TouchableHighlight
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    onSearchInputChange(text){

        this.setState({ location: text });

        /**
         * parse the JSON and use animateToRegion method to take to the location.

         ProTip: use the responseData.results[0].types[0] to set the Zoom Level of the Map.
         More here:
         https://developers.google.com/places/supported_types

         this.map.mapview.animateToRegion(region), 10)

         https://github.com/react-community/react-native-maps/issues/209#issuecomment-350907665
         */

        Geocoder.geocodeAddress(text).then((geoResult) => {

            /**
             * geoResult returns:
             * {
                    position: {lat, lng},
                    formattedAddress: String, // the full address
                    feature: String | null, // ex Yosemite Park, Eiffel Tower
                    streetNumber: String | null,
                    streetName: String | null,
                    postalCode: String | null,
                    locality: String | null, // city name
                    country: String,
                    countryCode: String
                    adminArea: String | null
                    subAdminArea: String | null,
                    subLocality: String | null
                }
             */

            let geoSuggestions = _.map(geoResult, item => {
                return {
                    "title": item.formattedAddress,
                    "type": "address",
                    "data": {
                        "position": item.position
                    }
                }
            });

            //console.warn(JSON.stringify(geoResult));

            // reset the suggestions to the default and the geocoded address
            let newSuggestions = _.merge(this.state.defaultSuggestions, geoSuggestions);

            this.setState({ suggestions: newSuggestions });

        }).catch(err => {
            console.log(err);
        });
    }

    onAutoCompleteSelect(data, details){
        // user chose a suggested item
        //console.warn(JSON.stringify(data));
        //console.warn(JSON.stringify(details));

        this.setState({ location: data.description });

        // trigger a region change to update the map
        if (_.get(details, 'geometry')){

            let locationCoords = {
                latitude: _.get(details, 'geometry.location.lat'),
                longitude: _.get(details, 'geometry.location.lng'),
                latitudeDelta: Constants.LATITUDE_DELTA,
                longitudeDelta: Constants.LONGITUDE_DELTA,
            };

            this.onRegionChange(locationCoords);

            this.setState({ locationCoords: locationCoords });

        } else {
            this.setState({ locationCoords: null });
        }

        // set zoom level?
    }

    updatePosition(permissionResponse){
        console.log('Fine Location permission: ', permissionResponse);

        navigator.geolocation.getCurrentPosition(
            position => {
                console.log('Got position:', position);
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: Constants.LATITUDE_DELTA,
                        longitudeDelta: Constants.LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            Constants.GEOLOCATION_OPTIONS
        );

        this.watchID = navigator.geolocation.watchPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: Constants.LATITUDE_DELTA,
                        longitudeDelta: Constants.LONGITUDE_DELTA,
                    }
                });
            }
        );

        // See: https://github.com/airbnb/react-native-maps/issues/1033
        // Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a repaint.
        setTimeout(() => this.setState({containerHeight: 1}), 250);
    }

    watchLocation() {
        // eslint-disable-next-line no-undef

        console.log('Watching location...');

        this.watchID = navigator.geolocation.watchPosition((position) => {

            console.log('Position:', position);

            const myLastPosition = this.state.myPosition;

            const myPosition = position.coords;

            if (! _.isEqual(myPosition, myLastPosition)) {
                console.log('Updating position:', myPosition);
                this.setState({ myPosition });
            }
        }, null, Constants.GEOLOCATION_OPTIONS);
    }

    componentWillUnmount() {
        if (this.watchID) navigator.geolocation.clearWatch(this.watchID);
    }

    updateLoc(){
        console.log('Updating current location...');
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Position', position);
                //alert(JSON.stringify(position));

                this.setState({region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: Constants.LATITUDE_DELTA,
                    longitudeDelta: Constants.LONGITUDE_DELTA
                }});

            }, (error) => {
                alert("Geolocation error: "+error.message);
            }
            // will timeout: {enableHighAccuracy: true, timeout: 10000, maximumAge: 0}
        );
    }

    componentDidMount() {
        console.log('Mounted');

        this.setState({ mounted: true });

        // initialize autocomplete with our default suggestions (activities)
        this.setState({ suggestions: this.state.defaultSuggestions });

        //console.warn(_.first(this.getUser().getActivities()).id);

        //this.setState({ activities: this.getUser().getActivities() });

        UserRepository.getActivities(this.getUser()).then(resp => {

        });

        /**
         * {
                key: "dog-walking",
                title: "Dog Walking",
                description: "",
                latlng: {
                    latitude: 33.9725661,
                    longitude: -118.4266267
                },
                image: require('@assets/ic_dog_walking.png')
            },
         {
             key: "cycling",
             title: "Cycling",
             description: "",
             latlng: {
                 latitude: 33.9825661,
                 longitude: -118.4266267
             },
             image: require('@assets/ic_cycling.png')
         }
         */

        // load all for now. @TODO only load the user's
        ActivityRepository.all().then((activities) => {
            this.setState({ activities: activities });
        });

        // load all for now. @TODO only load on current location and limit it
        EventRepository.all().then((events) => {
            //console.warn(JSON.stringify(_.first(events).latlng));
            this.setState({ events: events });
        });

        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Your Location',
                    'message': 'MeClub needs access to your location ' +
                    'so you can see the map.'
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

        /**
         if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Your Location',
                    'message': 'MeClub needs access to your location ' +
                    'so you can see the map.'
                }
            ).then(granted => {
                console.log('granted:', granted);
                if (granted && this.mounted) this.updatePosition();
            });

        } else {
            this.updatePosition();
        }
         */
        /**
         PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
         {
             'title': 'Your Location',
             'message': 'MeClub needs access to your location ' +
             'so you can see the map.'
         }
         ).then(this.updatePosition);
         */
        /**
         * navigator.geolocation.getCurrentPosition(
         (position) => {
                Geocoder.geocodePosition({lat: position.coords.latitude, lng: position.coords.longitude}).then((results)=> {
                    let result = results[0];
                    Address.saveFromMap(result);
                    this.setState({
                        addressText: result.formattedAddress,
                        address: result
                    })
                });
                this.setState({
                    coordinates: {
                        latitude: position.coords.latitude, longitude: position.coords.longitude
                    }
                });
                this.googleMap.animateToRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.02305,
                    longitudeDelta: 0.01075
                })
            },
         (error) => alert(error),
         {timeout: 60000, maximumAge: 10000}
         );
         * @type {Number}
         */
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    getActivityImageForEvent(event){
        // @TODO lookup activity
        const activity = _.first(this.state.activities);
        return activity ? { uri: activity.icon} : null;
        //return require('@assets/activities/hiking.png');
    }

    showEvent(event){
        return this.props.navigation.navigate('EventDetail', { eventDetail: event });
    }

    navigateTo(routeName){
        return this.props.navigation.navigate(routeName);
    }

    filterAutocomplete(query){
        if (query === '' || query === null) {
            return [];
        }

        const { autocomplete } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        const filtered = autocomplete.filter(item => item.title.search(regex) >= 0);

        console.warn('found', filtered);

        return filtered;
    }

    _renderRightButton(){
        return (
            <TouchableOpacity onPress={() => this.setState({ location: '' })}>
                <Text style={{color: 'white'}}> (X) </Text>
            </TouchableOpacity>
        );
    }

    render() {

        return (
            //Setting a value (padding) we can change to force a repaint
            <View style={[styles.container, {paddingBottom: this.state.containerHeight }]}>
                <View style={styles.searchWrap}>
                    <TouchableOpacity style={styles.btnMap} onPress={() => this.navigateTo('ActivitySearch') }>
                        <Text style={styles.btnMapText}>LIST VIEW</Text>
                    </TouchableOpacity>

                    <GooglePlacesAutocomplete
                        ref="autoCompleteInput"
                        placeholder="Type in any address, public site or business"
                        minLength={3}
                        autoFocus={false}
                        returnKeyType="search"
                        fetchDetails={true}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                width: '100%',
                                marginLeft: 15,
                                borderTopWidth: 0,
                                borderBottomWidth: 0
                            },
                            textInput: {
                                borderRadius:3,
                                backgroundColor:'white',
                                marginLeft: 0,
                                marginRight: 0,
                                height: 30,
                                fontSize: 12
                            },
                            listView: {

                            },
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
                        value={this.state.location}
                        enablePoweredByContainer={false}
                        predefinedPlacesAlwaysVisible={false}
                    />

                    {/**
                    <AutoComplete
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#5e627a"
                        placeholder="Type in any address, public site or business"
                        suggestions={this.state.suggestions}
                        onSelect={this.onAutoCompleteSelect.bind(this)}
                        suggestionObjectTextProperty='title'
                        value={this.state.location}
                        style={{ marginTop: 6, flex: 1 }}
                        suggestionsWrapperStyle={{ marginLeft: 15 }}
                        suggestionTextStyle={{color: 'white'}}
                        inputStyle={{ borderRadius:3,
                            backgroundColor:'white',
                            marginLeft: 15,
                            height: 30,
                            paddingVertical: 0,
                            paddingHorizontal: 10,
                        }}
                        onChangeText={this.onSearchInputChange.bind(this)}
                    />
                     */}

                </View>
                <View style={styles.timeWrap}>
                    <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:0})}>
                        <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 0 && {color:'white'}]}>TODAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:1})}>
                        <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 1 && {color:'white'}]}>TOMORROW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:2})}>
                        <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 2 && {color:'white'}]}>NEXT 7 DAYS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTimeItem} onPress={()=>this.setState({selectedTimeIndex:3})}>
                        <Text style={[styles.btnTimeItemText, this.state.selectedTimeIndex == 3 && {color:'white'}]}>NEXT 30 DAYS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <MapView
                        provider={ PROVIDER_GOOGLE }
                        showsUserLocation={ true }
                        followsUserLocation={ true }
                        showsMyLocationButton={ true }
                        showsScale={ true }
                        showsTraffic={ false }
                        region={ this.state.region }
                        onRegionChangeComplete={ this.onRegionChange } style={{height: '100%', width: '100%'}} zoomEnabled={true}
                    >
                        {this.state.events.map(event => (
                            <MapView.Marker
                                key={event.id}
                                coordinate={event.coordinates()}
                                title={event.name} onPress={() => this.showEvent(event)}>
                                <View>
                                    <Text>
                                        <Image source={this.getActivityImageForEvent(event)} style={{width: 100, height: 120 }} />
                                    </Text>
                                </View>
                            </MapView.Marker>
                        ))}
                        {this.state.location && this.state.locationCoords ? (
                            <MapView.Marker
                                key={'searchedLocation'}
                                coordinate={this.state.locationCoords}
                                title={this.state.location}>
                            </MapView.Marker>
                        ) : null}
                    </MapView>
                </View>
                <ActivityTabs {...this.props} />
            </View>
        );
    }
}

export default ActivityMap;