import { BookActionTypes } from './book.types';

export const fetchBooksPending = () => ({
    type: BookActionTypes.FETCH_BOOKS_PENDING
});

export const fetchBooksSuccess = books => ({
    type: BookActionTypes.FETCH_BOOKS_SUCCESS,
    payload: books
});

export const fetchBooksError = error => ({
    type: BookActionTypes.FETCH_BOOKS_ERROR,
    payload: error
});