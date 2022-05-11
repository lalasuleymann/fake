import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Navbar extends Component {
    render() {
        return <div class="site-navbar py-2">
        <div class="search-wrap">
            <div class="container">
                <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
                <form action="#" method="post">
                    <input type="text" class="form-control" placeholder="Search keyword and hit enter..."></input>
                </form>
            </div>
        </div>

        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="logo">
                    <div class="site-logo">
                        <Link to="/" className="js-logo-clone">Pharma</Link>
                    </div>
                </div>
                <div class="main-nav d-none d-lg-block">
                    <nav class="site-navigation text-right text-md-center" role="navigation">
                        <ul class="site-menu js-clone-nav d-none d-lg-block">
                            <li class="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Store</Link>
                            </li>
                            <li class="has-children">
                                <Link to="/">
                                    Dropdown
                                    <i class="fas fa-thin fa-angle-down"></i>
                                </Link>
                                <ul class="dropdown">
                                    <li>
                                        <Link to="/">Supplements</Link>
                                    </li>
                                    <li class="has-children">
                                        <Link to="/">
                                            Vitamins
                                             <i class="fas fa-thin fa-angle-right"></i>
                                        </Link>
                                        <ul class="dropdown">
                                            <li>
                                                <Link to="/">Supplements</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Vitamins</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Diet &amp; Nutrition</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Tea &amp; Coffee</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">Diet &amp; Nutrition</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Tea &amp; Coffee</Link>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="icons">
                    <a href="#" class="icons-btn d-inline-block js-search-open"><span>
                    <i class="fas fa-solid fa-magnifying-glass"></i>
                    </span></a>
                    <Link to="/basket" class="icons-btn d-inline-block bag">
                        <span>
                        <i class="fas fa-solid fa-bags-shopping"></i>
                        </span>
                        <span class="number">2</span></Link>
                    <Link to="/" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span>
                    <i class="fas fa-solid fa-bars"></i></span></Link>
                </div>
            </div>
        </div>
    </div>
    }
}
 
export default Navbar;