import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOteIwmqTrEYBAiyqd8KPPedZPa0Uz3BY",
  authDomain: "messenger-76374.firebaseapp.com",
  databaseURL: "https://messenger-76374.firebaseio.com",
  projectId: "messenger-76374",
  storageBucket: "messenger-76374.appspot.com",
  messagingSenderId: "691177552917",
  appId: "1:691177552917:web:fcdbe4c2fb982920ba221c",
  measurementId: "G-CRP1K5N7RE",
});

const db = firebaseApp.firestore();

export default db;
