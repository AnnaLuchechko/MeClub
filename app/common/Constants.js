import {
    Dimensions
} from 'react-native';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default {
  EventEmitterName: {
      OpenDrawer: "OpenDrawer",
      CloseDrawer: "CloseDrawer",
      Logout: "Logout",
  },
  GOOGLE_PLACE_KEY:'AIzaSyAdqzSeD6Xgk2w2D39WYFlJR2xgaDukl3g', // this is web service key, see https://developers.google.com/places/web-service/intro
  LATITUDE_DELTA: LATITUDE_DELTA,
  LONGITUDE_DELTA: LONGITUDE_DELTA,
  INITIAL_MAP_REGION: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
  },
  GEOLOCATION_OPTIONS: {
      enableHighAccuracy: true,
      timeout: 10000
  }
};