import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./firebase";


export async function login(email, password) {
  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return result.user;
}


export async function logout() {
  await signOut(auth);
}


export function checkAuth(callback) {
  return onAuthStateChanged(auth, callback);
}