import { BibleActionTypes } from './bible.types';

export function fetchBibles() {
    return dispatch => {
        dispatch(fetchBiblesBegin());
        return fetch('https://api.scripture.api.bible/v1/bibles', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'api-key': 'd2701aef2b0330f0c086431c7d1afc82'
            }
        }).then(handleErrors)
          .then(response => response.json())
          .then(json => {
              dispatch(fetchBiblesSuccess(json.data));
              return json.data;
          })
          .catch(error => dispatch(fetchBiblesFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchBiblesBegin = () => ({
    type: BibleActionTypes.FETCH_BIBLES_BEGIN
});

export const fetchBiblesSuccess = bibles => ({
    type: BibleActionTypes.FETCH_BIBLES_SUCCESS,
    payload: { bibles }
});

export const fetchBiblesFailure = error => ({
    type: BibleActionTypes.FETCH_BIBLES_FAILURE,
    payload: { error }
});