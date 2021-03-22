import * as ActionTypes from './ActionTypes'
import {NetworkHelper,Api,Constants} from "@common"

export function searchPlaces(key,lat,lng) {
  return (dispatch, getState) => {
    dispatch({type:ActionTypes.SEARCH_PLACES_PENDING})
    var url = Api.SEARCH_PLACES_API+"location="+lat+","+lng+"&radius=10000&keyword="+key+"&key="+Constants.GOOGLE_PLACE_KEY
     NetworkHelper.requestGet(url)
     .then((responseData)=>{
       let places = []
       responseData.results.forEach((item)=>{
         if (item.hasOwnProperty('geometry') && item.geometry.hasOwnProperty('location')) {
           places.push({
             location:{
               latitude:item.geometry.location.lat,
               longitude:item.geometry.location.lng,
               latitudeDelta: 0.43,
               longitudeDelta:0.34
             },
             name:item.name,
             vicinity:item.vicinity
           })
           return
         }
       })
       dispatch({type:ActionTypes.SEARCH_PLACES_SUCCESS,places})
     })
     .catch((error)=>{
       dispatch({type:ActionTypes.SEARCH_PLACES_FAIL,message:"Cannot search places"})
     })
  };
}
