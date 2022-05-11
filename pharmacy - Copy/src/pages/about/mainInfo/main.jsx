import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class MainInfo extends Component {
    render() { 
        return (
            <>
                <div class="site-section bg-light custom-border-bottom" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="block-16">
              <figure>
                <img src="./assets/images/bg_1.jpg" alt="Image placeholder" class="img-fluid rounded"></img>
                <Link to="/about"></Link>
              </figure>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
    
    
            <div class="site-section-heading pt-3 mb-4">
              <h2 class="text-black">How We Started</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
              exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat
              asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
            <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam
              cumque recusandae, laudantium minima repellendus.</p>
    
          </div>
        </div>
      </div>
    </div>

    

    <div class="site-section bg-light custom-border-bottom" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6 order-md-2">
            <div class="block-16">
              <figure>
                <img src="./assets/images/hero_1.jpg" alt="Image placeholder" class="img-fluid rounded"></img>
                <Link to="/about"></Link>
    
              </figure>
            </div>
          </div>
          <div class="col-md-5 mr-auto">
    
    
            <div class="site-section-heading pt-3 mb-4">
              <h2 class="text-black">We Are Trusted Company</h2>
            </div>
            <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
              exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat
              asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
            <p class="text-black">Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam
              cumque recusandae, laudantium minima repellendus.</p>
    
          </div>
        </div>
      </div>
    </div>
    
            </>
        );
    }
}
 
export default MainInfo;