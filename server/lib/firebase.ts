// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbNMQG40XHsWSRZrWFmoFiccSDwtPI1PM",
  authDomain: "bibliometrics-tool.firebaseapp.com",
  databaseURL: "https://bibliometrics-tool-default-rtdb.firebaseio.com",
  projectId: "bibliometrics-tool",
  storageBucket: "bibliometrics-tool.appspot.com",
  messagingSenderId: "581215064675",
  appId: "1:581215064675:web:27818fc74086da9161de56",
  measurementId: "G-PP0S44DHCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }
