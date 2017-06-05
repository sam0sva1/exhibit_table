import { createStore } from 'redux'
import mainReducer from './reducers'
import data from 'Data'
import tools from 'Tools'

const configureStore = () => {

    const store = createStore(
        mainReducer,
        {
            items: tools.sorting(data.initial, 'name'),
            filters: tools.filtering(data.initial)
        }
    );

    return store
}

export default configureStore