import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgSeGqeUYjxVWdPBfc7LKZNiN2EAvVq-Y',
  authDomain: 'keiba-post.firebaseapp.com',
  databaseURL: 'https://keiba-post.firebaseio.com',
  projectId: 'keiba-post',
  storageBucket: 'keiba-post.appspot.com',
  messagingSenderId: '730363267027',
  appId: '1:730363267027:web:681b341d40eabc84bbd126',
  measurementId: 'G-8PQN7V94SN',
};
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

export default firebase;
