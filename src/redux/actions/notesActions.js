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
