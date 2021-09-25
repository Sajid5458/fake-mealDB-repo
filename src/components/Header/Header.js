import React from 'react';
import './Header.css';
import logo from '../../images/logo-small.png';
import mealIcon from '../../images/meal-icon.png';
import petreon from '../../images/patreon_logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid container title-img">
                    <img src={logo} alt="" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <a className="nav-link active info-btn" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active info-btn" aria-current="page" href="/home">About us</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active info-btn" aria-current="page" href="/home">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="info-container pt-5">
                <div>
                    <img src={mealIcon} alt="" />
                </div>
                <div className="container">
                    <h1 className="text-white text-center">Welcome to TheMealDB</h1>
                    <p className="text-white text-center">Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                        We also offer a free JSON API for anyone wanting to use it.
                        If you like the site, please consider supporting us on Patreon by clicking the link below...    </p>
                   
                    <div  className="text-center petreon-container mb-5">

                         <a className=" mt-3" href="/support">
                             <img className="d-block mx-auto" src={petreon} width="30%" alt="" />
                         Click to Support: Currently 650 supporters</a>
                    </div>

                </div>
                <div>
                    <img src={mealIcon} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;