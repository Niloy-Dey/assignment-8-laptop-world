import React, { useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {

    const [cart, setCart] = useState([])
    const handleAddToCart = (product) =>{
        const  newCart = [...cart, product]
        setCart(newCart);
    }


    const products = props.data;
    return (
        <div>
             <h1 style={{textAlign:'center'}}>Welcome to laptop world</h1>
             <div className='full-container'>
                    <div className='product-container'>
                        {
                        products.map( pd  => <Product product={pd} key={pd.id}> </Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <h4>Selected Clothes</h4>
                        <p>item {cart.length} </p>
                        <button className='first-btn'>CHOOSE 1 FOR ME</button> <br /> <br />
                        <button className='second-btn'>CHOOSE AGAIN</button>
                    </div>
             </div>

             <div className="bonus-part">
                 <h5>How react works?</h5>
                 <p>Ans: React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. react  works in declarative code.  we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is </p>
                 
                 <h5>Props vs State</h5>
                 <p>Ans: </p>
                 <h5>How use state work</h5>
                 <p>Ans: State’ is the representation or a snapshot of the app at any one time. 
                    In a declarative UI, developers aren’t in charge the UI when something happens. They don’t have to worry about hiding or showing divs, as you would with a code-heavy imperative UI. We only have to worry about receiving a specific app ‘state or, a specific screen displaying specific information at any one time and rendering it in the UI.</p>

             </div>
        </div>
       
    );
};

export default Products;