import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAiNz-j5bQa_LjfPMcjO5_zFV355aH5sw0",
    authDomain: "uaeh-driia.firebaseapp.com",
    databaseURL: "https://uaeh-driia.firebaseio.com",
    projectId: "uaeh-driia",
    storageBucket: "uaeh-driia.appspot.com",
    messagingSenderId: "924569612350"
};
firebase.initializeApp(config);

export default firebase;