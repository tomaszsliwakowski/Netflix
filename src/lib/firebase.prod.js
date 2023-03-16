import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyB3TyqijXFNRAmJg4pdj9QqfdsA57cA850",
  authDomain: "netflix-clone-6c536.firebaseapp.com",
  projectId: "netflix-clone-6c536",
  storageBucket: "netflix-clone-6c536.appspot.com",
  messagingSenderId: "330342731608",
  appId: "1:330342731608:web:8602453039d77058b95f2d",
  measurementId: "G-SKFXD0XKBP",
};

const firebaseapp = firebase.initializeApp(Config);
export { firebaseapp };
