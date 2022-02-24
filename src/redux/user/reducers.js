import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants';


const initialState = {
    loading: false,
    users: [],
    errMessage: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                errMessage: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                errMessage: action.payload,
                users: []
            }

        default: return state
    }
}

export default userReducer