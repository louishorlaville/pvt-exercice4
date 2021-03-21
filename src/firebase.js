import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCNoBew2DQyWGQigE_yW5RxPs6H5NA_NhE",
  authDomain: "pvt-h21-lh.firebaseapp.com",
  databaseURL: "https://pvt-h21-lh-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-lh",
  storageBucket: "pvt-h21-lh.appspot.com",
  messagingSenderId: "451415435455",
  appId: "1:451415435455:web:069b921878f8b6d2707e0a"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
