import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Products extends Component {
    render() { 
        return (
            <>
            <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><Link to="/">Home</Link> <span class="mx-2 mb-0">/</span> <strong class="text-black">Store</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        
        <div class="row">
          <div class="col-lg-6">
            <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
            <div id="slider-range" class="border-primary"></div>
            <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
          </div>
          <div class="col-lg-6">
            <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Reference</h3>
            <button type="button" class="btn btn-secondary btn-md dropdown-toggle px-4" id="dropdownMenuReference"
              data-toggle="dropdown">Reference</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
              <Link class="dropdown-item" to="/shop">Relevance</Link>
              <Link class="dropdown-item" to="/shop">Name, A to Z</Link>
              <Link class="dropdown-item" to="/shop">Name, Z to A</Link>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" to="/shop">Price, low to high</Link>
              <Link class="dropdown-item" to="/shop">Price, high to low</Link>
            </div>
          </div>
        </div>
    
        <div class="row">
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <span class="tag">Sale</span>
            <a href="shop-single.html"> <img src="./assets/images/product_01.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p class="price"><del>95.00</del> &mdash; $55.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="./assets/images/product_02.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
            <p class="price">$70.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="./assets/images/product_03.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p class="price">$120.00</p>
          </div>
    
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
    
            <a href="shop-single.html"> <img src="./assets/images/product_04.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
            <p class="price"><del>45.00</del> &mdash; $20.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="./assets/images/product_05.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">CLA Core</a></h3>
            <p class="price">$38.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <span class="tag">Sale</span>
            <a href="shop-single.html"> <img src="./assets/images/product_06.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
            <p class="price"><del>$89</del> &mdash; $38.00</p>
          </div>

          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <span class="tag">Sale</span>
            <a href="shop-single.html"> <img src="./assets/images/product_01.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p class="price"><del>95.00</del> &mdash; $55.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="./assets/images/product_02.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
            <p class="price">$70.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="./assets/images/product_03.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p class="price">$120.00</p>
          </div>
          
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
          
            <a href="shop-single.html"> <img src="./assets/images/product_04.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
            <p class="price"><del>45.00</del> &mdash; $20.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="./assets/images/product_05.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">CLA Core</a></h3>
            <p class="price">$38.00</p>
          </div>
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <span class="tag">Sale</span>
            <a href="shop-single.html"> <img src="./assets/images/product_06.png" alt="Image"></img></a>
            <h3 class="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
            <p class="price"><del>$89</del> &mdash; $38.00</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-12 text-center">
            <div class="site-block-27">
              <ul>
                <li>
                  <Link to="/shop">&lt;</Link>
                </li>
                <li class="active">
                  <Link to="/shop">1</Link>
                </li>
                <li>
                  <Link to="/shop">2</Link>
                </li>
                <li>
                  <Link to="/shop">3</Link>
                </li>
                <li>
                  <Link to="/shop">4</Link>
                </li>
                <li>
                  <Link to="/shop">5</Link>
                </li>
                <li>
                  <Link to="/shop">&gt;</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

            </>
        );
    }
}
 
export default Products;