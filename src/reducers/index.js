import { combineReducers } from 'redux'
import items from './items'
import filters from './filters'

const mainReducer = combineReducers({
  items,
  filters
});

export default mainReducer
