import tools from 'Tools'

const filters = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_FILTER':
            return state.map(f => filter(f, action))
        case 'CREATE_ITEM':
            const { city, country } = action.item
            const origin = tools.prepareOrigin(city, country)
            const exist = state.find(one => one.name === origin)
            if (exist) return state
            return tools.sorting([
                ...state,
                filter(undefined, action)
            ], 'name')
        default:
            return state
    }
}

const filter = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_FILTER':
            if (state.name !== action.label) {
                return state
            }
            return {
                ...state,
                isActive: !state.isActive,
            }
        case 'CREATE_ITEM':
            const { city, country } = action.item
            return {
                name: tools.prepareOrigin(city, country),
                isActive: false
            }
        default:
            return state
    }
}

export default filters
