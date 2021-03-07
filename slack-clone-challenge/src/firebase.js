import firebase from  'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCK9xbOPV5TFSkqGQRH1TG0VusPhxavph8",
    authDomain: "slack-clone-react-63ec9.firebaseapp.com",
    projectId: "slack-clone-react-63ec9",
    storageBucket: "slack-clone-react-63ec9.appspot.com",
    messagingSenderId: "1082951288669",
    appId: "1:1082951288669:web:9f37245b3d776934238ab4"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();



export {auth,provider}


export  default db;
