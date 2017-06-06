import tools from 'Tools'

const items = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return tools.sorting.array([
        ...state,
        action.item,
      ], 'name')
    default:
      return state
  }
}

export default items
