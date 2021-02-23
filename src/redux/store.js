import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk';
const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware));
export default store