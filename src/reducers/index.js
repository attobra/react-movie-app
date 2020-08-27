import {combineReducers} from 'redux'
import searchReducer from './searchReducer'

export default combineReducers({
    //movies will take its value or its state from searchReducer
    movies: searchReducer
  });