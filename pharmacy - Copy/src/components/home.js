import React from "react";
import Intro from "../pages/home/intro/intro";
import Product from "../pages/home/product/product";
import NewProduct from "../pages/home/newProduct/newProduct";
import Testimonial from "../pages/home/testimonial/testimonial";
import Extra from "../pages/home/extra/extra";

function Home(){
    return(
        <div className="">
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Intro />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Product />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <NewProduct />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Testimonial />
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


export default Home;