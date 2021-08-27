import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import React, { Component } from "react";
import NavBar from "./components/navbar"
import Products from "./components/products";
//import NotFound from "./components/notFound";
import {Route,Switch} from "react-router-dom";
import "./App.css";
import Cart from './components/cart';
import About from './components/about';
import ItemForm from './components/itemform';
import { getProducts } from './services/fakeProductsService';

class App extends Component {
  state={
    products:getProducts(),
    itemsToOrder:[],
  };
  handleorder=(cnt, prod)=>{
    if(cnt <= 0)
    {
      {alert("you cant buy zero Products!")};
    }else{
    let id=prod._id;
    this.state.itemsToOrder[id]={"cnt":cnt,"id":id,"name":prod.productName,"url":prod.imgUrl,"price":prod.price,"description":prod.productDescription};
       }   this.setState({itemsToOrder:this.state.itemsToOrder});
    //console.log(this.state.itemsToOrder);
}
  handleBuy=(boughtItem)=>{
    const p= [...this.state.products];
    for(let x of boughtItem){
      if(x != null){
        for(let y of p){
        ///must check why cant maake changes on id only
          if(x.name === y.productName){
            if(y.numberInStock >= x.cnt){
              y.numberInStock-=x.cnt;  
          }else
            if(y.numberInStock < x.cnt)
              {alert("No Enough Products!")};
            }
          }
        }
      }
  this.state.itemsToOrder=[];
  this.setState({products:p});
     // console.log(p);
  }
  handleShow=(cnt,prod)=>{
    let id=prod._id;
    this.state.itemsToOrder[id]={"cnt":cnt,"id":id,"name":prod.productName,"url":prod.imgUrl,"description":prod.productDescription};
    this.setState({itemsToOrder:this.state.itemsToOrder});
  //  console.log(this.state.itemsToOrder)
  }

  render(){

  return (

  <div style={{ 
    
      backgroundImage: `url("loaykenan1.jpeg")` }}>
         <NavBar />
        <main className="container" >
        <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" render={(props) => <Products handleorder={this.handleorder} products={this.state.products}{...props} />}/>
        <Route exact path="/cart"><Cart products={this.state.products} items={this.state.itemsToOrder}  onBuy={this.handleBuy}/></Route>
        <Route path="/ItemForm"><ItemForm products={this.state.products} items={this.state.itemsToOrder} onShow={this.handleShow} /></Route>
        </Switch>

    <p>{'---------------------------------------------------------------------'}</p>
    <h1>{'Loay & Kenan Project <(^_~)>'}</h1>
    <p>{'---------------------------------------------------------------------'}</p>
    <details>  
    <summary>{'Copyright 2019-2021.'}</summary>
    <p> {'- by Programmer [Admin]Loay. All Rights Reserved.'} </p>
    <p> {'- All content and graphics on this web site are the property of the Loay company.'} </p>
    </details> 
    </main>
      </div>    
   
  
  );
  }
}

export default App;
