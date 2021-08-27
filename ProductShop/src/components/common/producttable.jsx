import React, {Component} from 'react';
import Like from "./liket";
import Table from "./table";
import Counter from '../counter';


class ProductsTable extends Component {
    columns =[
      {path: "productName", label:"ProductsNames"},
      {path: "genre.name", label:"Category"},
      {path: "numberInStock", label:"Stock"},
      {path: "price", label:"Price"},
      {label:"ProductImage",content:product=><img src={product.imgUrl} alt="" width="" height="70"/>},  
      {key:"like" , content: product => <Like liked={product.liked} onClick={() => this.props.onLike(product)} />},
      {key:"counter", content: product => <Counter  handleorder={this.props.handleorder} product={product}/>},
      {key:"delete" , content: product =>  <button onClick={() => this.props.onDelete(product)}
      className="btn btn-danger btn-sm">Delete</button>}
      
    ];
 
  render(){
    const {products,onSort,sortColumn}=this.props;
   
    return (  
   <Table 
   columns={this.columns}
   sortColumn={sortColumn}
   onSort={onSort}
   data={products}
   />
    );
  }
}
export default ProductsTable;