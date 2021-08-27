import React, { Component } from 'react';
import './App.css';
//import Products from './components/products';
//import { getProducts } from './services/fakeProductsService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
//import Movies from "./components/movies";
//import FaceApp from './components/FaceApp';
import Calculators from './components/calculator';

class App extends Component {


  render(){
 
  return (
      
    <main className="container">
    <Calculators />
    <h2>{'HomeWork Calculator !'}</h2>
    <p>{'---------------------------------------------------------------------'}</p>
    <h1>{'Loay & Kenan Project <(^_~)>'}</h1>
    <p>{'---------------------------------------------------------------------'}</p>
    <details>  
    <summary>{'Copyright 2019-2021.'}</summary>
    <p> {'- by Programmer [Admin]Loay. All Rights Reserved.'} </p>
    <p> {'- All content and graphics on this web site are the property of the Loay company.'} </p>
    </details>       
    </main>
  );
  }
}

export default App;
