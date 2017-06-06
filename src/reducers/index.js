import { combineReducers } from 'redux'
import items from './items'
import filters from './filters'
import pagination from './pagination'
import searchToken from './searchToken'

const mainReducer = combineReducers({
  items,
  filters,
  pagination,
  searchToken
})

export default mainReducer
