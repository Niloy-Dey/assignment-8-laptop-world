import React from 'react';

const CartProduct = (props) => {
    // console.log(props);
    const {name} = props.clickProduct;
    return (
        <div>
            <p><b>select Item: </b>{name} </p>
        </div>
    );
};

export default CartProduct;