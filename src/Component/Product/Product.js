import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {name, picture, price} = props.product;
        return (
        <div className='card'>
           <div className="card-info">
           <img className='card-picture' src={picture} alt="" />
            <h5>Name : {name} </h5>
            <h5>Price : ${price} </h5>
           </div>
            <button className='cart-btn'>Add to cart </button>
        </div>
    );
};

export default Product;