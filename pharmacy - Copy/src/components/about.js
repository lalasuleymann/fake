import React from "react";
import Team from "../pages/about/team/team";
import BasicInfo from "../pages/about/info/info";
import MainInfo from "../pages/about/mainInfo/main";
import Banner from "../pages/about/banner/banner";

function About(){
    return(
        <div className="">
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Banner />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <MainInfo />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <BasicInfo />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Team />
                </div>
            </div>
        </div>
    );
}

export default About;