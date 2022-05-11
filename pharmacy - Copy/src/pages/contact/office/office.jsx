import React, { Component } from "react";

class Office extends Component {
    render() { 
        return (
            <div class="site-section bg-primary">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="text-white mb-4">Offices</h2>
                </div>
                <div class="col-lg-4">
                  <div class="p-4 bg-white mb-3 rounded">
                    <span class="d-block text-black h6 text-uppercase">New York</span>
                    <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="p-4 bg-white mb-3 rounded">
                    <span class="d-block text-black h6 text-uppercase">London</span>
                    <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="p-4 bg-white mb-3 rounded">
                    <span class="d-block text-black h6 text-uppercase">Canada</span>
                    <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      
        );
    }
}
 
export default Office;