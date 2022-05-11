import React from "react";
import Cart from "../pages/basket/cart/cart";
import Extra from "../pages/home/extra/extra";

function Basket(){
    return(
        <div className="">
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Cart />
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

export default Basket;