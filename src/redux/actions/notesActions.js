import { db_notes } from '../../config';

export const getNotes = () => {
	return dispatch => {
		db_notes.on('value', snap => {
			dispatch({
				type: 'GET_NOTES',
				notes: snap.val()
			});
		});
	};
};

/*** USER ACTIONS */

export const addNote = (id, text) => ({
	type: 'ADD_NOTE',
	id: id,
	text: text
});

export const editNote = (id, text) => ({
	type: 'EDIT_NOTE',
	id: id,
	text: text
});

export const removeNote = id => ({
	type: 'REMOVE_NOTE',
	id: id
});
