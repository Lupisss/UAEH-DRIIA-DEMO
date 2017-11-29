import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAQRSp5m7nYLhFR0pTxP0-CRneWD3C_VtU",
    authDomain: "uaehdri.firebaseapp.com",
    databaseURL: "https://uaehdri.firebaseio.com",
    projectId: "uaehdri",
    storageBucket: "uaehdri.appspot.com",
    messagingSenderId: "989628737200"
};
firebase.initializeApp(config);

export default firebase;