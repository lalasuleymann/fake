import React from "react";
import Extra from "../pages/home/extra/extra";
import Products from "../pages/store/products/products";

function Shop(){
    return(
        <div className="">
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Products />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Extra />
                </div>
            </div>
        </div>
    );
}

export default Shop;