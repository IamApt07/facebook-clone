// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcAS54kHJBSbjDTRSaNDnIjhB0B0imeu0",
  authDomain: "facebook-clone-65247.firebaseapp.com",
  databaseURL: "https://facebook-clone-65247-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-65247",
  storageBucket: "facebook-clone-65247.appspot.com",
  messagingSenderId: "783920299688",
  appId: "1:783920299688:web:c9733dccf6afe67f7e4c9d"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

const storage = firebase.storage();
export { db, storage };