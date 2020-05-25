import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCSPW8LgttYsJdAOmrQ1-ZbmKd1r0vjTMk",
  authDomain: "edu-memo.firebaseapp.com",
  databaseURL: "https://edu-memo.firebaseio.com",
  projectId: "edu-memo",
  storageBucket: "edu-memo.appspot.com",
  messagingSenderId: "419083864198",
  appId: "1:419083864198:web:0cf67beda52034526a6907",
  measurementId: "G-2L32TVKYQB"
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
