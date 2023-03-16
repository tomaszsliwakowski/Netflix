import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { firebaseapp } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ firebaseapp }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
