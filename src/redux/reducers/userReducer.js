const initialUserState = {
	isLogged: false,
	userName: '',
	userPass: '',
	language: ''
};

const userState = (state = initialUserState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, isLogged: true };
		case 'LOGOUT':
			return { ...state, isLogged: false };
		case 'SET_INFO':
			return { ...state, userName: action.name, userPass: action.pass };
		case 'SET_LANG':
			return { ...state, language: action.language };
		default:
			return state;
	}
};

export default userState;
