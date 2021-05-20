import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3Bfw0T5un5aYDx0KSLpuKjRS1STf6j5A",
  authDomain: "crwn-db-7c887.firebaseapp.com",
  projectId: "crwn-db-7c887",
  storageBucket: "crwn-db-7c887.appspot.com",
  messagingSenderId: "799463044357",
  appId: "1:799463044357:web:0ae7c50b604235cdf6736c",
  measurementId: "G-VQW8LF80QN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
