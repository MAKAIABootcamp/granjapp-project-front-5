// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage"
// import { getFirestore } from "firebase/firestore/lite";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBG-8i8KeKWeuHXjboDjGf4gPbB-TkzY6Y",
//   authDomain: "granjapp-3a234.firebaseapp.com",
//   projectId: "granjapp-3a234",
//   storageBucket: "granjapp-3a234.appspot.com",
//   messagingSenderId: "774109083628",
//   appId: "1:774109083628:web:4a42ac3a9e022cf15932c9",
// };

// // Initialize Firebase
// export const FirebaseApp = initializeApp(firebaseConfig);
// export const FirebaseAuth = getAuth(FirebaseApp);
// export const FirebaseDB = getFirestore(FirebaseApp);
// export const storage = getStorage(FirebaseApp,"gs://granjapp-3a234.appspot.com");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDD8Unom25uM9pYTFo8JyjcmXZCTmEt1wM",
  authDomain: "granjapp2-2a574.firebaseapp.com",
  projectId: "granjapp2-2a574",
  storageBucket: "granjapp2-2a574.appspot.com",
  messagingSenderId: "7744510886",
  appId: "1:7744510886:web:35b37f3db164c6c184cd67"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
