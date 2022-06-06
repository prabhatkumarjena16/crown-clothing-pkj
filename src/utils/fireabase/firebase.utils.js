import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkhGxi_nP-Lsu0GHG0gVsYMYUbCtNTY-8",
  authDomain: "crown-clothing-b64f8.firebaseapp.com",
  projectId: "crown-clothing-b64f8",
  storageBucket: "crown-clothing-b64f8.appspot.com",
  messagingSenderId: "283537741707",
  appId: "1:283537741707:web:334057469ab0a3f2f1018e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
