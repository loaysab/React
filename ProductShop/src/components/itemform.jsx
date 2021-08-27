import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class ItemForm extends Component{
    state = { 
        items:this.props.items,//item you added to the cart
        allproducts:this.props.products,
        show:false
}
render(){
    return (
        //show the information about the wanted product
        <div>
        <table className="logo">
         <thead>
         <tr>
             <th>ProductName</th>
             <th>Image</th>
             &nbsp;&nbsp;&nbsp; 
             <th>Description</th>
         </tr>
         </thead>
         <tbody>
         {this.state.items.map(item => <tr key={item._id}>
                <td>{item.name}</td>
                <td><img src = {item.url}  alt="" width="50" height="50"></img></td>
                &nbsp;&nbsp;&nbsp; 
                <td>{item.description}</td>
                </tr>)}
                <Link to="/cart"><button className="btn btn-primary" style={{textAlign:"center" }} >BackToCart</button></Link>
            </tbody>
            </table>
        </div> 
    );
         }
}
 
export default ItemForm;