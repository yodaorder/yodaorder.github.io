import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { db } from "../service/firebase";



const firebaseConfig = {
  apiKey: "AIzaSyDjxu2LkSuCq3VY9YaoQad28x2z_VIbgyo",
  authDomain: "riftline-esports.firebaseapp.com",
  projectId: "riftline-esports",
  storageBucket: "riftline-esports.firebasestorage.app",
  messagingSenderId: "64134796045",
  appId: "1:64134796045:web:be6687da525414efbe9644"
};



const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);



export const db = getFirestore(app);


export default app;