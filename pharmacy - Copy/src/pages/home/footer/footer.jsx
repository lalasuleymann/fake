import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Footer extends Component {
    render() { 
        return <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">

                    <div class="block-7">
                        <h3 class="footer-heading mb-4">About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.</p>
                    </div>

                </div>
                <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
                    <h3 class="footer-heading mb-4">Quick Links</h3>
                    <ul class="list-unstyled">
                        <li><Link to="/">Supplements</Link></li>
                        <li><Link to="/">Vitamins</Link></li>
                        <li><Link to="/">Diet &amp; Nutrition</Link></li>
                        <li><Link to="/">Tea &amp; Coffee</Link></li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="block-5 mb-5">
                        <h3 class="footer-heading mb-4">Contact Info</h3>
                        <ul class="list-unstyled">
                            <li class="address">
                                <i class="fas fa-solid fa-location-arrow"></i>
                                203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li class="phone"><a href="tel://23923929210">
                                <i class="fas fa-solid fa-phone"></i>
                                +2 392 3929 210</a></li>
                            <li class="email">
                                <i class="fas fa-solid fa-envelope"></i>
                                emailaddress@domain.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    }
}
 
export default Footer;