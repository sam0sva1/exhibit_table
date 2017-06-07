import tools from 'Tools'

const items = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_ITEM':
            const { item, item: { city, country } } = action
            return tools.sorting([
                ...state,
                {
                    ...item,
                    origin: tools.prepareOrigin(city, country)
                }
            ], 'name')
        default:
            return state
    }
}

export default items
