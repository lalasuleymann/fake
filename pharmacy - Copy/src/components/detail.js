import React from "react";
import Detail from "../pages/shopDetail/detail/detail";
import Extra from "../pages/home/extra/extra";

function ShopDetail(){
    return(
        <div className="">
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Detail />
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

export default ShopDetail;