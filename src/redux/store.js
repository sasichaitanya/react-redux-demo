import { createStore } from 'redux';
import cakeReducer from './cake/reducers';

const store = createStore(cakeReducer)

export default store;
