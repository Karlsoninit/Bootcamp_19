import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBtyIWilX_0HpAF3P9YJ6ROu4qIvmgKYU",
  authDomain: "planning-30686.firebaseapp.com",
  databaseURL: "https://planning-30686.firebaseio.com",
  projectId: "planning-30686",
  storageBucket: "planning-30686.appspot.com",
  messagingSenderId: "351320879047",
  appId: "1:351320879047:web:5b0191f7723fef94f033e2",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
