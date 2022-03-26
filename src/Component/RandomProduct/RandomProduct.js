import React from 'react';

const RandomProduct = (props) => {

    return (
        <div>
            <p style={{fontSize:'20px'}}> <b> {props?.selected.name} </b> </p>
        </div>
    );
};

export default RandomProduct;