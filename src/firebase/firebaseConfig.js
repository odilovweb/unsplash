import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7LRbL5FeSnTm8HVGTBBV17UTW3fltkik",
  authDomain: "unsplash-test-project-4ee9c.firebaseapp.com",
  projectId: "unsplash-test-project-4ee9c",
  storageBucket: "unsplash-test-project-4ee9c.appspot.com",
  messagingSenderId: "598887086477",
  appId: "1:598887086477:web:9ddd2be052fbe0e38ee5c4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const SignupWithGoogle = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
export const logOut = () => {
  signOut(auth)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
