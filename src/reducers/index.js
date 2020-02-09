import { combineReducers } from 'redux';
import BooksReducer from './reducer_book';
import activeBook from './reducer_Ective_book';

const rootReducer = combineReducers({
	"books": BooksReducer,
	"activeBook": activeBook
})
export default rootReducer;