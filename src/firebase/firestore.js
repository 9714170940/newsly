/* eslint-disable no-unused-vars */
import firebase from './config';

const db = firebase.firestore()

export const storeData = async (name, id, data) => {
   const dataSet =  db.collection(name).doc(id).set(data);
   return dataSet
}

export const retriveData = async (collection, id) => {
   const userRef =  db.collection(collection).doc(id);
   const dataSet = await userRef.get()
   const data = await dataSet.data()
   return data
}