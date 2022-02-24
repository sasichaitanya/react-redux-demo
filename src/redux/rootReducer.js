import { combineReducers } from 'redux';

import cakeReducer from './cake/reducers';
import icecreamReducer from './icecream/reducers';
import userReducer from './user/reducers';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
})

export default rootReducer;