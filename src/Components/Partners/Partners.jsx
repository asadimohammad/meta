import React from "react";
import "../../styles/partners.css";
import BitVend from "../../images/bitVendors.jpeg";

const Partners = () => {
    return (
        <div className="partners container-fluid">
            <div className="title">Partners</div>
            <div className="img">
                <img src={BitVend} alt="" />
            </div>
            <div className="circles right">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
            <div className="circles left">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
        </div>
    );
};

export default Partners;
