import {applyMiddleware} from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk';
const middleware = [thunk]

const store = Redux.createStore(reducer, applyMiddleware(...middleware))