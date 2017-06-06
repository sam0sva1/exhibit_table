import { createStore } from 'redux'
import mainReducer from './reducers'
import data from 'Data'
import tools from 'Tools'

const configureStore = () => {

    const store = createStore(
        mainReducer,
        {
            items: tools.sorting.array(data.initial, 'name'),
            filters: tools.filtering(data.initial),
            pagination: { current: 0, part: 2 },
            searchToken: ''
        }
    )

    return store
}

export default configureStore