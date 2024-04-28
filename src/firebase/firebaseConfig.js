import firebase from 'firebase/app';
import 'firebase/database'; 


const firebaseConfig = {
    apiKey: "AIzaSyA7Cje6OML3UHO5I-APSoo1ObZl3l6BH9E",
    authDomain: "final-project-1d39e.firebaseapp.com",
    databaseURL: "https://final-project-1d39e-default-rtdb.firebaseio.com",
    projectId: "final-project-1d39e",
    storageBucket: "final-project-1d39e.appspot.com",
    messagingSenderId: "843604622091",
    appId: "1:843604622091:web:c1ab834c6e58d17536000e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}