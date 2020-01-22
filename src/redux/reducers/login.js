import {
    BEGIN_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/login';

const initialState = {
    error: null,
    response: null,
    isLoading: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BEGIN_LOGIN:
            return {
                ...state,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                response: action.payload.response,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                response: null,
            }
        default:
            return state;
    }
}