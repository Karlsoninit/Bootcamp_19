import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyL-wGOJn3m-yl-9dCZ3-LsiwYUBvPrDg",
  authDomain: "ticking-notes.firebaseapp.com",
  databaseURL: "https://ticking-notes.firebaseio.com",
  projectId: "ticking-notes",
  storageBucket: "ticking-notes.appspot.com",
  messagingSenderId: "797435079079",
  appId: "1:797435079079:web:05f0748ea16ed28d5c2e82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
