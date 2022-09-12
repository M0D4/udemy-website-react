import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {
    const shoppingCartStyle = {
        fontSize: 29
    }
    return (
        <>
            <nav className="nav-bar-container">
                <div className="small-screen">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="udemy-logo">
                    <Link to={"/"}>
                        <img className="logo" src={"https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"} alt="Udemy logo" />
                    </Link>
                </div>
                <nav className="big-screen">
                    <button className="categories hover-change">Categories</button>
                </nav>
                <div className="search-bar big-screen">
                    <form action="/courses/search" className="search-form">
                        <button className="search-icon"><i className="fa fa-search"></i></button>
                        <input className="search-text ml-4" type="text" name="search" placeholder="Search for anything" />
                    </form>
                </div>
                <div className="udemy-business big-screen">
                    <a href="/teaching" className="hover-change">Udemy Business</a>
                </div>
                <div className="teach big-screen">
                    <a href="/teaching" className="hover-change">Teach on Udemy</a>
                </div>
                <div className="search-and-shop">
                    <a href="/cart" className="shopping-cart hover-change big-screen">
                        <i className='fa fa-shopping-cart' style={shoppingCartStyle}></i>
                    </a>
                </div>
                <div className="buttons big-screen">
                    <button className="login-button medium-button"><span className="login-text font-weight-bold">Log in</span></button>
                    <button className="signup-button medium-button"><span className="signup-text font-weight-bold">Sign up</span></button>
                    <button className="lang medium-button"><i className="fa fa-globe"></i></button>
                </div>
            </nav>
        </>
    );
}

export default NavBar;