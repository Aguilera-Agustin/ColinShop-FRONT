import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyBcPFVRoBDzs3sN0QbyZ3DN32nyoeegje0",
    authDomain: "colinshop-95c0c.firebaseapp.com",
    projectId: "colinshop-95c0c",
    storageBucket: "colinshop-95c0c.appspot.com",
    messagingSenderId: "202257767004",
    appId: "1:202257767004:web:138a973fe4dd611075a499"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export  {
    db,
    firebase
}