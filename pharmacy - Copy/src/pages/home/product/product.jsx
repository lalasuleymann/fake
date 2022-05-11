import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Product extends Component {
    render() { 
        return (
            <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="title-section text-center col-12">
                        <h2 class="text-uppercase">Popular Products</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 col-lg-4 text-center item mb-4">
                        <span class="tag">Sale</span>
                        <Link to="/detail"> <img src="./assets/images/product_01.png" alt="Image"></img></Link>
                        <h3 class="text-dark"><Link to="/detail">Bioderma</Link></h3>
                        <p class="price"><del>95.00</del> &mdash; $55.00</p>
                    </div>
                    <div class="col-sm-6 col-lg-4 text-center item mb-4">
                        <Link to="/detail"> <img src="./assets/images/product_02.png" alt="Image"></img></Link>
                        <h3 class="text-dark"><Link to="/detail">Chanca Piedra</Link></h3>
                        <p class="price">$70.00</p>
                    </div>
                    <div class="col-sm-6 col-lg-4 text-center item mb-4">
                        <Link to="/detail"> <img src="./assets/images/product_03.png" alt="Image"></img></Link>
                        <h3 class="text-dark"><Link to="/detail">Umcka Cold Care</Link></h3>
                        <p class="price">$120.00</p>
                    </div>

                    <div class="col-sm-6 col-lg-4 text-center item mb-4">

                        <Link to="/detail"> <img src="./assets/images/product_04.png" alt="Image"></img></Link>
                        <h3 class="text-dark"><Link to="/detail">Cetyl Pure</Link></h3>
                        <p class="price"><del>45.00</del> &mdash; $20.00</p>
                    </div>
                    <div class="col-sm-6 col-lg-4 text-center item mb-4">
                        <Link to="/detail"> <img src="./assets/images/product_05.png" alt="Image"></img></Link>
                        <h3 class="text-dark"><Link to="/detail">CLA Core</Link></h3>
                        <p class="price">$38.00</p>
                    </div>
                    <div class="col-sm-6 col-lg-4 text-center item mb-4">
                        <span class="tag">Sale</span>
                        <Link to="/detail"> <img src="./assets/images/product_06.png" alt="Image"></img></Link>
                        <h3 class="text-dark"><Link to="/detail">Poo Pourri</Link></h3>
                        <p class="price"><del>$89</del> &mdash; $38.00</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12 text-center">
                        <Link to="/shop" class="btn btn-primary px-4 py-3">View All Products</Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Product;