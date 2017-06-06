import tools from 'Tools'

const filters = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return {
          ...state,
          [action.label]: !state[action.label]
      }
    case 'CREATE_ITEM':
      state[tools.prepareOrigin(action.item.city, action.item.country)] = false
      return {
          ...tools.sorting.properties(state)
      }
    default:
      return state
  }
}

export default filters
