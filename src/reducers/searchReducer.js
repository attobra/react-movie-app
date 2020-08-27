import {SEARCH_MOVIE, FETCH_MOVIES} from '../actions/types'

//initial state is the state of the application
const initialState ={
    text: '',        //search text that you enter in the search box
    movies: [],      //json data from the API
    loading: false,  //false or true depending on the data that is coming
    movie: []        //json info from the API
}

//export create function that will test the action types
//DEPENDING on the action type, it will set the value of that action 
//(payload/data) set into a specific state

export default function (state=initialState, action){
    switch (action.type) {
        case SEARCH_MOVIE:
          return {
            ...state,
            text: action.payload,
            loading: false
          };
          case FETCH_MOVIES:
          return {
            ...state,
            movies: action.payload,
            
          };
        default:
            return state;
        }
}