import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0
  }
foobar =()=>{
  return this.state.count === 0 || this.state.count> 5 || this.state.count<0 ? '-' : ' '+this.state.count;
}
handleIncrement =()=> {
  if(this.state.count<this.props.product.numberInStock) {
  this.setState({count: this.state.count + 1});

}else{
  window.alert("not enough stock");
}
}
handleDecrement=()=>{
  if(this.state.count > 0){
  this.setState({count: this.state.count - 1});
  }else{
    window.alert("You Can't Order a Negative value");
  }
}
Order = () => {
    this.props.handleorder(this.state.count,this.props.product);
    const cnt = 0;
    this.setState({count: cnt});
}
    render() {
        return (
          <table>
          <tbody>
            <tr>
          <td>
          <button className='btn btn-outline-success btn-sm m-2' onClick={this.handleIncrement}>+</button>
          <button className='btn btn-outline-info btn-sm m-2'>{this.state.count}</button>
           <button className='btn btn-outline-warning btn-sm m-2' onClick={this.handleDecrement}>-</button>
           <button className="btn btn-danger -sm btn-default btndone" onClick={this.Order}>Add to cart</button>
           </td>
           </tr>
       </tbody></table>
        )
    }
}
export default Counter;