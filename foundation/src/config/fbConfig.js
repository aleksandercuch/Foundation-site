import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Replace this with your own config details
var firebaseConfig = {
    apiKey: "AIzaSyDsnfvCGpTYGNRWrphBvPwRlrm1jeJzsCQ",
    authDomain: "foundation-website-20317.firebaseapp.com",
    databaseURL: "https://foundation-website-20317.firebaseio.com",
    projectId: "foundation-website-20317",
    storageBucket: "foundation-website-20317.appspot.com",
    messagingSenderId: "878267188457",
    appId: "1:878267188457:web:15894e964e8e0413071c78",
    measurementId: "G-X8YMSY13ZY"
  };


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}