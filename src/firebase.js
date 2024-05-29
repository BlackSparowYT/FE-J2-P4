// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzrdVzyJtaFJS1TUPIy1LgIBlO4AzKLPk",
  authDomain: "vakroddels.firebaseapp.com",
  databaseURL: "https://vakroddels-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vakroddels",
  storageBucket: "vakroddels.appspot.com",
  messagingSenderId: "980482299251",
  appId: "1:980482299251:web:66648acf533ac283892106",
  measurementId: "G-QMBD2VYKMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase = {
    db: getFirestore(app),
    auth: getAuth(app)
}

export default firebase;