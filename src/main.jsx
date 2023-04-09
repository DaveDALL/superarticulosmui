import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcyxi8rZknAlqk8zqZ3KnFPtwEQgl2s-s",
  authDomain: "superarticulos-51145.firebaseapp.com",
  projectId: "superarticulos-51145",
  storageBucket: "superarticulos-51145.appspot.com",
  messagingSenderId: "1021899176277",
  appId: "1:1021899176277:web:da8cc8eebd0b1fc8a517dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
