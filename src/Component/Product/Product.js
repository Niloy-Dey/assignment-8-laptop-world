import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
            <button className='cart-btn'>
             <p>Add to cart</p> 
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;