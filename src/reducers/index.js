import { combineReducers, createStore, compose } from 'redux'
import timer from 'reducers/timer'

const rootReducer = combineReducers({
  timer
})

let composeEnhancers = compose
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configStore = () => createStore(rootReducer, composeEnhancers())

export default configStore
