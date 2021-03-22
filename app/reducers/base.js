import * as ActionTypes from '../actions/ActionTypes'
const dataSuccess = (action)=>{return {type:action.type,isRequesting: false,message:""}}
const dataFail = (action)=>{return {type:action.type,isRequesting: false,message:action.message}}
const dataPending = (action)=>{return {type:action.type,isRequesting: true,message:""}}

export default function base(state = {}, action){
  switch(action.type) {
    case ActionTypes.SEARCH_PLACES_PENDING:
    {
      return Object.assign({}, state, {
        ...dataPending(action)
      })
    }
    case ActionTypes.SEARCH_PLACES_SUCCESS:
    {
      return Object.assign({}, state, {
        places:action.places,
        ...dataSuccess(action)
      })
    }
    case ActionTypes.SEARCH_PLACES_FAIL:
    {
      return Object.assign({}, state, {
        ...dataFail(action)
      })
    }
    default:
    return state;
  }
}
