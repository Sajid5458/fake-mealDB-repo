import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const totalOderedItems = props.meal.length;
    const meals = props.meal;
    return (
        <div>
            <h4 className="text-white">Odered Items: {totalOderedItems}</h4>
            {
                meals.map(meal => <p className="text-white">{meal.strMeal}</p>)
            }
        </div>
    );
};

export default Cart;