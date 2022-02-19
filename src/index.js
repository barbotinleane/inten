import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyzdQVTBleeYUkGN8SbaR40dUWclcohBU",
  authDomain: "inten2-6b11f.firebaseapp.com",
  projectId: "inten2-6b11f",
  storageBucket: "inten2-6b11f.appspot.com",
  messagingSenderId: "146872432777",
  appId: "1:146872432777:web:2704c1f35c5c11f70a6e58"
};


initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
