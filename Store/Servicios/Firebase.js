import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAfXv1MggDkYOOd21F3LTJBesjsbmRwjXU',
  authDomain: 'clone-instagram-5e15b.firebaseapp.com',
  databaseURL: 'https://clone-instagram-5e15b.firebaseio.com',
  projectId: 'clone-instagram-5e15b',
  storageBucket: 'clone-instagram-5e15b.appspot.com',
  messagingSenderId: '734990959442',
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();


export const baseDeDatos = firebase.database();
