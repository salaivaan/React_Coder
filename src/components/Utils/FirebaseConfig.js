// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCSIjn2fInaaL1PAfpI2VmyghcSEmDZs9o",

  authDomain: "react-coder-ecommerce-a9f10.firebaseapp.com",

  projectId: "react-coder-ecommerce-a9f10",

  storageBucket: "react-coder-ecommerce-a9f10.appspot.com",

  messagingSenderId: "1063833423503",

  appId: "1:1063833423503:web:e8c4a9800c258708ef6afa"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firebaseFetch = async (categoryId) =>{
    let q;
  
    if(categoryId){
        
        q = query(collection(db, "products"), where ('categoryId', '==', categoryId));
    }
    else{
       
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc=>({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
  }


//un solo producto


export const fsFetchDetail = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
      return {
          id: docSnap.id,
          ...docSnap.data()
      };
  } else {
      console.log("No such document!");
  }
};


