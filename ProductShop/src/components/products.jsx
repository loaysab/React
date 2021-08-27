import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';
import {getGenres} from "../services/fakeGenreService";
import ProductsTable from "./common/producttable";
import _ from'lodash';
// import { getProducts } from '../services/fakeProductsService';

class Products extends Component {
    state = { 
        products:this.props.products,
        genres: [],
        itemsToOrder:[],
        currentPage : 1,
        pageSize : 4,
        sortColumn: {path : "productName", order: "asc"}
    }
    componentDidMount(){
      const genres= [{_id:"", name: 'All Categories'}, ...getGenres()];
      this.setState({products: this.state.products, genres: genres});
    }
    handleDelete = product => {
      const products = this.state.products.filter(p => p._id !== product._id);
      this.setState({ products });
    };
    handleGenreSelect = genre => {
      this.setState({selectedGenre: genre, currentPage: 1});
    }
    handleLike = product => {
      const products = [...this.state.products];
      const index = products.indexOf(product);
      products[index] = { ...products[index] };
      products[index].liked = !products[index].liked;
      this.setState({ products });
    };
    handlePagechange = page =>{
      this.setState({currentPage : page});
  
    }
    handleSort = (newColumn) => 
    {
      this.setState({sortColumn : newColumn});
    }
        render() {
          
        const { length: count } = this.state.products;
        const { pageSize , currentPage, selectedGenre , products : allProducts,sortColumn } = this.state;
        if (count === 0) return <h3>There are no products in the database.</h3>;
        
        const filteredProducts = selectedGenre && selectedGenre._id ? allProducts.filter(p=> p.genre._id === selectedGenre._id) : allProducts;
        const sortedProducts = _.orderBy(filteredProducts,[sortColumn.path],[sortColumn.order]);
        const products = paginate(sortedProducts, currentPage, pageSize);
    
        return (
          
          <div className="row">
            <h2>{'HomeWork ShopMarket!'}</h2> 
            <br />
                <br />  
          <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenere}
            onItemSelect={this.handleGenreSelect}
            />
          </div>
        <div className='col'>
        <h3>Showing {filteredProducts.length} products in the database.</h3>
          <ProductsTable
           products={products}
           sortColumn={sortColumn}
           onLike={this.handleLike}
           onDelete={this.handleDelete}
           onSort={this.handleSort}
           handleorder={this.props.handleorder}
  
          />
          <Pagination
            itemsCount={filteredProducts.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePagechange}
            />
          </div>
        </div>
        );
  }
}

export default Products;