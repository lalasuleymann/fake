import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class NewProduct extends Component {
    render() { 
        return (
            <div class="site-section bg-light">
            <div class="container">
                <div class="row">
                    <div class="title-section text-center col-12">
                        <h2 class="text-uppercase">New Products</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 block-3 products-wrap">
                        <div class="nonloop-block-3 owl-carousel">

                            <div class="text-center item mb-4">
                                <Link to="/"></Link>
                                <Link to="/detail"> <img src="./assets/images/product_03.png" alt="Image"></img></Link>
                                <h3 class="text-dark"><Link to="/detail">Umcka Cold Care</Link></h3>
                                <p class="price">$120.00</p>
                            </div>

                            <div class="text-center item mb-4">
                                <Link to="/detail"> <img src="./assets/images/product_01.png" alt="Image"></img></Link>
                                <h3 class="text-dark"><Link to="/detail">Umcka Cold Care</Link></h3>
                                <p class="price">$120.00</p>
                            </div>

                            <div class="text-center item mb-4">
                                <Link to="/detail"> <img src="./assets/images/product_02.png" alt="Image"></img></Link>
                                <h3 class="text-dark"><Link to="/detail">Umcka Cold Care</Link></h3>
                                <p class="price">$120.00</p>
                            </div>

                            <div class="text-center item mb-4">
                                <Link to="/detail"> <img src="./assets/images/product_04.png" alt="Image"></img></Link>
                                <h3 class="text-dark"><Link to="/detail">Umcka Cold Care</Link></h3>
                                <p class="price">$120.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default NewProduct;