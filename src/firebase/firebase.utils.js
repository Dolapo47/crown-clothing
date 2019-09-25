import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDra6rQQQIcWbfTm38b-75yfEKi-DtCN6c",
    authDomain: "crown-db-99cf4.firebaseapp.com",
    databaseURL: "https://crown-db-99cf4.firebaseio.com",
    projectId: "crown-db-99cf4",
    storageBucket: "",
    messagingSenderId: "414502412481",
    appId: "1:414502412481:web:b0dd2e096c156fa4e0f440",
    measurementId: "G-CGSV1XNJ57"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;