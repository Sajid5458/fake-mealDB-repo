import React from 'react';
import './Product.css';
const Product = (props) => {
    const {strMealThumb, strMeal} = props.meal;
    return (
        <div onClick={() => props.addToCart(props.meal)} className="col-md-3 d-flex justify-content-center product-container">
            <p className="text-white text-center fw-bold product">
                <img className="img-fluid mt-2 rounded-3" src={strMealThumb} alt="" />
                <span>{strMeal}</span></p>
        </div>
    );
};

export default Product;