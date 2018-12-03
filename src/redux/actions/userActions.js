export const login = () => ({
	type: 'LOGIN'
});

export const logout = () => ({
	type: 'LOGOUT'
});

export const setInfo = (name, pass) => ({
	type: 'SET_INFO',
	name: name,
	pass: pass
});

export const setLanguage = language => ({
	type: 'SET_LANG',
	language: language
});
