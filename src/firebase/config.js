import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCm9jnBYSweZYmlelDg8g38U1qYkDfAjss",
    authDomain: "newsly-164bb.firebaseapp.com",
    projectId: "newsly-164bb",
    storageBucket: "newsly-164bb.appspot.com",
    messagingSenderId: "913260717277",
    appId: "1:913260717277:web:6c733f70d337d647c8e734",
    measurementId: "G-38YSEW8SNT"
}



firebase.initializeApp(config);
firebase.analytics();

export default firebase;

