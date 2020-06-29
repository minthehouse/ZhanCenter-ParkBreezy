import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBqq1S_QqTAYHfAwOzzpkDw2LWyMJh3NWo",
  authDomain: "parkbreezy-806aa.firebaseapp.com",
  databaseURL: "https://parkbreezy-806aa.firebaseio.com",
  projectId: "parkbreezy-806aa",
  storageBucket: "parkbreezy-806aa.appspot.com",
  messagingSenderId: "333885035545",
  appId: "1:333885035545:web:9cbfcd9331d8520e278688",
  measurementId: "G-DCRM8R6Y5H",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
