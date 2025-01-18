import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { FirebaseContext } from "./config";
import { auth, backFirebase, firestore } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ backFirebase, auth, firestore }}>
    <React.StrictMode>
    <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </FirebaseContext.Provider>
);

serviceWorkerRegistration.register();
