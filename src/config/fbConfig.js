import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import configuration from "./config";

// Initialize Firebase
const config = {
  apiKey: configuration.apiKeyFirebase,
  authDomain: "wiki-marvel-2018.firebaseapp.com",
  databaseURL: "https://wiki-marvel-2018.firebaseio.com",
  projectId: "wiki-marvel-2018",
  storageBucket: "wiki-marvel-2018.appspot.com",
  messagingSenderId: "503904656111"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
