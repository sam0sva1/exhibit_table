import { combineReducers } from 'redux'
import items from './items'

const mainReducer = combineReducers({
  items,
});

export default mainReducer
