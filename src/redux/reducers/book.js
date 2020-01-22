import {
    BEGIN_BOOK,
    BOOK_SUCCESS,
    BOOK_FAILURE
} from '../actions/book';

const initialState = {
    error: null,
    response: null,
    isLoading: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BEGIN_BOOK:
            return {
                ...state,
            }
        case BOOK_SUCCESS:
            return {
                ...state,
                response: action.payload.response,
                error: null,
            }
        case BOOK_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                response: null,
            }
        default:
            return state;
    }
}