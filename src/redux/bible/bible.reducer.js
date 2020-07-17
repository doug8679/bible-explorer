import { BibleActionTypes } from './bible.types';

const INITIAL_STATE = {
    loading: false,
    items: [],
    error: null
};

const bibleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BibleActionTypes.FETCH_BIBLES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case BibleActionTypes.FETCH_BIBLES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.bibles
            };
        case BibleActionTypes.FETCH_BIBLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
};

export default bibleReducer;