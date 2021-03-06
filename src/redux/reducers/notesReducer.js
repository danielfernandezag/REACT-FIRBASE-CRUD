const notesInitialState = {
	notes: []
};

const notesState = (state = notesInitialState, action) => {
	switch (action.type) {
		case 'GET_NOTES':
			let newNotes = [];
			action.notes.forEach(note => {
				newNotes.push(note);
			});
			return { ...state, notes: newNotes };
		case 'ADD_NOTE':
			return { ...state, notes: [...state.notes, action.note] };
		case 'EDIT_NOTE':
			return { ...state, notes: state.notes.map(note => (note.id === action.id ? { ...note, text: action.text } : note)) };
		case 'REMOVE_NOTE':
			const indexToRemove = state.notes.findIndex(note => note.id === action.id);
			return { ...state, notes: [...state.notes.slice(0, indexToRemove), ...state.notes.slice(indexToRemove + 1)] };
		default:
			return state;
	}
};

// const notesState = (state = notesInitialState, action) => {
// 	switch (action.type) {
// 		case 'GET_NOTES':
// 			return { ...state, notes: action.notes };
// 		case 'ADD_NOTE':
// 			return { ...state, notes: [...state.notes, action.note] };
// 		case 'EDIT_NOTE':
// 			return { ...state, notes: state.notes.map(note => (note.id === action.id ? { ...note, text: action.text } : note)) };
// 		case 'REMOVE_NOTE':
// 			const indexToRemove = state.notes.findIndex(note => note.id === action.id);
// 			return { ...state, notes: [...state.notes.slice(0, indexToRemove), ...state.notes.slice(indexToRemove + 1)] };
// 		default:
// 			return state;
// 	}
// };

export default notesState;
