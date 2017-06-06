const items = (state = '', action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.token
    default:
      return state
  }
}

export default items
