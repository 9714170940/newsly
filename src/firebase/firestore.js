/* eslint-disable no-unused-vars */
import firebase from './config';

const db = firebase.firestore()

export const storeData = async (name, id, data) => {
   const dataSet =  db.collection(name).doc(id).set(data);
   return dataSet
}