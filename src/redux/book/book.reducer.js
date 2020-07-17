import { BookActionTypes } from './book.types';

const INITIAL_STATE = {
    pending: false,
    books: [],
    error: null
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS_PENDING:
            return {
                ...state,
                pending: true
            };
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                pending: false,
                books: action.payload
            };
        case BookActionTypes.FETCH_BOOKS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default bookReducer;