import { BookActionTypes } from './book.types';

const INITIAL_STATE = {
    loading: false,
    items: [],
    error: null
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                pending: false,
                items: action.payload.books
            };
        case BookActionTypes.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
};

export default bookReducer;