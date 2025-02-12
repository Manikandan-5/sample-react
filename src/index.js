import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favcolor from './components/Favcolor';
import Car from './components/Car';
import Scooter from './components/Scooter';
import Object from './components/Object';
import List from './components/List';
import Timer from './components/Timer';
import Form from './components/Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Favcolor />
    <Car/>
    <Scooter />
    <Object />
   <List/>
   <Timer />
   <Form/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
