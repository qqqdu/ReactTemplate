

import {createStore, combineReducers} from 'redux';

import * as reducer from './reducer';

var store = createStore(
    combineReducers(reducer)
);

export default store;