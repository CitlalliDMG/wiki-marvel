import firebase from "firebase";
import configuration from "./config";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

// Initialize Firebase
const config = {
  apiKey: configuration.apiKeyFirebase,
  authDomain: "wiki-marvel-2018.firebaseapp.com",
  databaseURL: "https://wiki-marvel-2018.firebaseio.com",
  projectId: "wiki-marvel-2018",
  storageBucket: "wiki-marvel-2018.appspot.com",
  messagingSenderId: "503904656111"
};

const firebaseApp = firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// export default firebase;

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
