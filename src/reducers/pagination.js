const pages = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return {
                ...state,
                current: action.number
            }
        case 'TOGGLE_FILTER':
        case 'NEW_SEARCH':
            return {
                ...state,
                current: 0
            }
        default:
            return state
    }
}

export default pages
