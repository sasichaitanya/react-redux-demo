import { BUY_ICECREAM } from './constants';


const initialState = {
    noOfIcecreams: 10
}

const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIcecreams: state.noOfIcecreams - action.number
            }
    
        default: return state
    }
}

export default icecreamReducer