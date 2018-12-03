import * as firebase from 'firebase';

const FIREBASE_CONFIG = {
	apiKey: 'AIzaSyDeRoF6G6krOO_WwDbbW8Hov-Ay1D4SvBI',
	authDomain: 'react-firebase-crud-814ce.firebaseapp.com',
	databaseURL: 'https://react-firebase-crud-814ce.firebaseio.com',
	projectId: 'react-firebase-crud-814ce',
	storageBucket: 'react-firebase-crud-814ce.appspot.com',
	messagingSenderId: '391181049050'
};

const db = firebase.initializeApp(FIREBASE_CONFIG);

export const db_notes = db
	.database()
	.ref()
	.child('notes');
export const db_users = db
	.database()
	.ref()
	.child('users');
