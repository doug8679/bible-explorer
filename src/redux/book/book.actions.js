import { BookActionTypes } from './book.types';

export function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksBegin());
        return fetch('https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'api-key': 'd2701aef2b0330f0c086431c7d1afc82'
            }
        }).then(handleErrors)
          .then(response => response.json())
          .then(json => {
              dispatch(fetchBooksSuccess(json.data));
              return json.data;
          })
          .catch(error => dispatch(fetchBooksFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchBooksBegin = () => ({
    type: BookActionTypes.FETCH_BOOKS_BEGIN
});

export const fetchBooksSuccess = books => ({
    type: BookActionTypes.FETCH_BOOKS_SUCCESS,
    payload: { books }
});

export const fetchBooksFailure = error => ({
    type: BookActionTypes.FETCH_BOOKS_FAILURE,
    payload: { error }
});