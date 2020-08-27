import {SEARCH_MOVIE, FETCH_MOVIES} from './types'
import axios from 'axios'
import APIKey from '../APIKey'

//dispatch is coming from the redux-thunk middleware
export const searchMovie = text => dispatch =>{ 
    //when something is triggered in our App, an action is dispatched
//dispatch the action TYPE and the PAYLOAD that will make the reducer
//recognize our action
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

//HTTP request with AXIOS
export const fetchMovies = text => dispatch => {
    axios
    .get(`http://www.omdbapi.com/?apikey=f9d68eae&s=${text}`)
    .then(response => dispatch ({
        type: FETCH_MOVIES,
        payload: response.data.Search
    })
    )
    .catch(err=>console.log(err))
}