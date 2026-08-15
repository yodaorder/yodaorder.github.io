import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "./firebase";


// Get all documents
export async function getItems(collectionName) {

  const snapshot = await getDocs(
    collection(db, collectionName)
  );

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data()
  }));
}


// Add document
export async function addItem(collectionName, data) {

  await addDoc(
    collection(db, collectionName),
    data
  );

}


// Delete document
export async function removeItem(collectionName, id) {

  await deleteDoc(
    doc(db, collectionName, id)
  );

}