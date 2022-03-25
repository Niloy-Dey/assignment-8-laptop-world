import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const products = props.data;
    return (
        <div className='full-container'>
            <h1 style={{textAlign:'center'}}>Welcome to laptop world</h1>
            <div className='product-container'>
                {
                products.map( pd  => <Product product={pd} key={pd.id}> </Product>)
                }
            </div>
            <div className="cart-container">
                
            </div>
        </div>
    );
};

export default Products;