import firebase from 'firebase/compat';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBCvCzK6uYyVN3nsOArWNn-6fKNx_1c4NE",
    authDomain: "linkedinclone-1fd4f.firebaseapp.com",
    projectId: "linkedinclone-1fd4f",
    storageBucket: "linkedinclone-1fd4f.appspot.com",
    messagingSenderId: "48145847965",
    appId: "1:48145847965:web:f2ae21420634f56f65e674"
  };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
     const db = firebaseApp.firestore();
     const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth};
//export default firebase;