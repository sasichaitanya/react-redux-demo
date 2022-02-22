import { BUY_CAKE } from './constants';


const initialState = {
    noOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - action.number
            }
    
        default: return state
    }
}

export default cakeReducer