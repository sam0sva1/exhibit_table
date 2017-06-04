import { createStore } from 'redux'
import mainReducer from './reducers'
import data from 'Data'

const configureStore = () => {

    const store = createStore(
        mainReducer,
        {
            items: data.initial
        }
    );

    return store
}

export default configureStore;