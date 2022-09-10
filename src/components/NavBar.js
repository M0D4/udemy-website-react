import React from 'react'
import './NavBar.css';


function NavBar() {
    const shoppingCartStyle = {
        fontSize: 36
    }
    return (
        <>
            <nav className="nav-bar-container">
                <div className="small-screen">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="udemy-logo">
                    <a href="udemy.com">
                        <img className="logo" src={"https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"} alt="Udemy" />
                    </a>
                </div>
                <nav className="big-screen">
                    <button className="categories hover-change">Categories</button>
                </nav>
                <div className="search-bar big-screen">
                    <form action="/courses/search" className="search-form">
                        <button className="search-icon"><i className="fa fa-search fa-2x"></i></button>
                        <input className="search-text" type="text" name="search" placeholder="Search for anything" />
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
                    <button className="login-button medium-button"><span className="login-text">Log in</span></button>
                    <button className="signup-button medium-button"><span className="signup-text">Sign up</span></button>
                    <button className="lang medium-button"><i className="fa fa-globe"></i></button>
                </div>
            </nav>
        </>
    );
}

export default NavBar;