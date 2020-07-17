import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bibleReducer from './bible/bible.reducer';
import bookReducer from './book/book.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    bibles: bibleReducer,
    books: bookReducer
});

export default persistReducer(persistConfig, rootReducer);