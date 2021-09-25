import React, { useEffect, useState } from 'react';
import './Main.css';
import totalMeals from '../../images/meal-icon6.png';
import totalIngerdients from '../../images/meal-icon4.png';
import totalImages from '../../images/image2.png';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Main = () => {

    const [meals, setMeals] = useState([]);
    const [newMeal, setNewMeal] = useState([]);
    const [searchText, setSearchText] = useState('');
    console.log(searchText)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);
    const addToCart = product => {
        const newMeals = [...newMeal, product];
        setNewMeal(newMeals);
    }
    const inputText = text=>{
        const searchText = text.target.value;
         setSearchText(searchText)
    }
    return (
        <div className="main-container">
            <div>
                <div className="input-container py-4">
                    <div className="input-group mb-3 mx-auto input-group-container">
                        <input onClick={inputText} type="text" className="form-control" placeholder="Search for a Meal..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span onClick={inputText} className="input-group-text bg-light" id="basic-addon2"><i className="fas fa-search"></i></span>
                    </div>
                    <div className="text-center">
                        <p className="text-white"><img src={totalMeals} alt="" /> <span className="fw-bold">Total Meals:</span> 283 <img src={totalIngerdients} alt="" /> <span className="fw-bold">Total Ingredients:</span> 574 <img src={totalImages} alt="" /> <span className="fw-bold">Images:</span> 283</p>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="text-center text-white mt-4">Latest Meals</h5>
                <div className="row mx-0">
                    <div className="col-md-10">
                        <div className="row mx-0 pe-4 pt-4 gx-5 border-end">
                            {
                                meals.map(meal => <Product addToCart={addToCart} key={meal.idMeal} meal={meal} />)
                            }
                        </div>
                    </div>
                    <div className="col-md-2 text-center container">

                        <Cart meal={newMeal} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;