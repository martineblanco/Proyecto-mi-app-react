
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7xXAA2n95xyoFWRa9u9XgEr0jzaTaQz0",
  authDomain: "ecommerce-c6f37.firebaseapp.com",
  projectId: "ecommerce-c6f37",
  storageBucket: "ecommerce-c6f37.appspot.com",
  messagingSenderId: "55947364860",
  appId: "1:55947364860:web:adc60a7b250507c6baca79"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)