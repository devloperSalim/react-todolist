import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld from './helloWorld/HelloWorld'
import TextFields from './forms/TextFields'
import reportWebVitals from './reportWebVitals';
import Fruit from './Fruits/Fruit';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitList = [
  'limone',
  'appel',
  'dla7',
  'frise'
]
root.render(
  <React.StrictMode>
    <Fruit fruta={fruitList}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
