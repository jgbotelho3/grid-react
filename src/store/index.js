import {createStore, combineReducers} from 'redux'
import filterReducer from './MassiveData/Filter.reducer'

const rootReducer = combineReducers({
    data: filterReducer
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

export default store