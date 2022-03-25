import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {name, picture, price} = props.product;
        return (
        <div>
            <img className='card-picture' src={picture} alt="" />
            <h5>Name : {name} </h5>
            <h5>Price : ${price} </h5>
        </div>
    );
};

export default Product;