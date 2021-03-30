import firebase from 'firebase';

var firebaseApp= firebase.initializeApp({
 // Your web app's Firebase configuration
  // var firebaseConfig = {
    apiKey: "AIzaSyCCpSdynF5_AAmVwb12fuhLQTT-f7ycKQY",
    authDomain: "react-contact-form-ae866.firebaseapp.com",
    projectId: "react-contact-form-ae866",
    storageBucket: "react-contact-form-ae866.appspot.com",
    messagingSenderId: "1048215492422",
    appId: "1:1048215492422:web:09d1ca32eb322adb4d7747"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
});

var db = firebaseApp.firestore();

export {db};