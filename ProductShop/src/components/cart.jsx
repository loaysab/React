import React, { Component } from 'react';
import{Link}from "react-router-dom";




class Cart extends Component {
    state = { 
        items:this.props.items,//item you added to the cart
        allproducts:this.props.products,
        total:0,//total price of all cart items
        bought:false,//if false the buy button will appear if true the buy button will dissappear
        show:false
    }

    componentDidMount(){
        //get the total price of all items in cart and put it into this.state.total variable
        var totalP=this.state.total;
        for(let x of this.state.items){
            console.log(this.state.total);
            if(x !== undefined){
                console.log(x);
                totalP+= Number(x.cnt)*Number(x.price);
            }
        }
        this.setState({total:totalP});
    }

    render() { 
        
        if(this.state.items.length === 0){
            return <h2 style={{textAlign:"center"}}>No Product!</h2 >
        }else{
            return (
                <div>
                <table className="logo">
                 <thead>
                 <tr>
                     <th>ProductName</th>
                     <th>Image</th>
                     <th>Price</th>
                     <th>TotalItems</th>
                     <th>TotalPrice</th>
                     <th>Description</th>
                 </tr>
                 </thead>
                 <tbody>
                    {this.state.items.map(item => <tr key={item._id}>
                        <td>{item.name}</td>
                        <td><img src = {item.url}  alt="" width="50" height="50"></img></td>
                        <td>{item.price}</td>
                        <td>{item.cnt}</td>
                        <td>{Number(item.cnt)*Number(item.price)}$</td>
                        <br>
                        </br>
                        <Link to="/itemform">{this.state.show?"":<button className="btn btn-info" style={{textAlign:"center" }} onclick={this.ShowTable}>Description</button>}</Link>
                    </tr>)}
                    {<br></br>}
                    {<br></br>}
                    <h2 basic negative floated='right'>Total Price:${this.state.total}</h2>
                    {<br></br>}
                    {<br></br>}
                    <h3>To Purchase Press: <Link to="/">{this.state.bought?"":<button className="btn btn-outline-success" basic negative floated='right' onClick={()=>this.onBuyFunc(this.state.items)}>Purchase</button>}</Link></h3> 
                    {<br></br>}
                    {<br></br>}
                    <h3>To Clear Cart Press: <button className="btn btn-outline-danger" basic negative floated='right'  onClick={this.EmptyCart}>EmptyCart</button></h3>
                    {<br></br>}
                    {<br></br>}
                    {<br></br>}
                    {<br></br>}
                    <Link to="/"><button className="btn btn-primary" style={{textAlign:"center" }} >BackToProducts</button></Link>
                 </tbody>
            </table> 
            </div>
            ); 
            
        }
    }

    onBuyFunc=()=>{
        //this function is to buy the items by prefurming the handleBuy function in "main" component
        //also it empties the items array and make the total cost equal to 0
        //and make the buy button disappear once the user has bought
        this.props.onBuy(this.state.items);
        this.setState({items:[],total:0,bought:true});
    }
    ShowTable=()=>{
        this.props.onShow(this.state.items);
        this.setState({items:[],show:true});
    }
    EmptyCart =()=>{
        
    this.setState({items:this.state.items=[]});
    }
}
 
export default Cart;