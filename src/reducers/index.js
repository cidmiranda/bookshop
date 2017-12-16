"use strict"

import {combineReducers} from 'redux';

// IMPORT REDUCERS TO COMBINE
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// COMBINE REDUCERS
export default combineReducers({
	books: booksReducers,
	cart: cartReducers
})