import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfkyrOuVB4XmDZI-xK7m277T8EXoa5jnI",
  authDomain: "proyecto-react-inventflix.firebaseapp.com",
  projectId: "proyecto-react-inventflix",
  storageBucket: "proyecto-react-inventflix.appspot.com",
  messagingSenderId: "218399820776",
  appId: "1:218399820776:web:49b3cc95f0ba1e23e9325d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/*<React.StrictMode>  */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
