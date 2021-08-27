import React, {Component} from 'react';
import Table from "./table";
import Counter from '../counter';


class CartTable extends Component {
    columns =[
      {path: "ProductName", label:"ProductsNames"},
      {label:"ProductImage",content:item=><img src={item.url} alt="" width="" height="70"/>},  
      {path: "price", label:"Price"},
      {path: "cnt", label:"TotalItems"},
      {path:"total",lable:"TotalPrice"},
      {key:"BuyItems" , content: item =>  <button onClick={this.onBuyFunc(item)}
      className="btn btn-danger">Buy Items</button>}
      
    ];
 
  render(){
    const {items,onSort,sortColumn}=this.props;
   
    return (  
   <Table 
   columns={this.columns}
   sortColumn={sortColumn}
   onSort={onSort}
   data={items}
   allproducts={this.props.products}
   />
    );
  }
}
export default CartTable;