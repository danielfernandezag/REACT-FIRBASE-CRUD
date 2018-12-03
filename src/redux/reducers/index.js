import { combineReducers } from 'redux';
import userState from './userReducer';
import notesState from './notesReducer';

export default combineReducers({
	userState,
	notesState
});
