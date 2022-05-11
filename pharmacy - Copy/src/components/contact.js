import React from "react";
import ContactDetail from "../pages/contact/contact/contact";
import Office from "../pages/contact/office/office";

function Contact(){
    return(
        <div className="">
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <ContactDetail />
                </div>
            </div>
            <div className="">
                <div className="col-xs-10 col-xs-offset-1">
                    <Office />
                </div>
            </div>
        </div>
    );
}

export default Contact;