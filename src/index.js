import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormList from './Form/FormList';
import Page from './LangueSwitcher/Page';
import FormValidation from './Form/FormValidation';
import TextFields from './forms/TextFields';
import Fruit from './Fruits/Fruit';
import FruitList from './Fruits/FruitList/FruitList';
import HelloWorld from './helloWorld/HelloWorld';


const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitList = [
  'limone',
  'appel',
  'dla7',
  'frise',
  'ldris'
]
root.render(
  <React.StrictMode>
      <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
