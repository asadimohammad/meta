import React from "react";
import "../../styles/portfolio.css";
import NFTCUSTOMIZER from "../../images/NFTCUSTOMIZER.png";
import AVAX from "../../images/AVAX.png";
import AMERICAN from "../../images/AMERICAN.png";
import NFTGENARATOR from "../../images/NFTGENARATOR.png";
import SOL from "../../images/SOL.png";
import TURKISH from "../../images/TURKISH.png";
import Partners from "../Partners/Partners";

const Portfolio = () => {
    return (
        <div className="port-part container-fluid">
            <div className="portfolio" id="portfolio">
                <div className=" d-flex-center">
                    <div className="ellip">
                        <span>PORTFOLIO</span>
                    </div>
                </div>
                <div className="companies d-flex-center">
                    <div className="com1">
                        <img src={AVAX} alt="" />
                        <span>AVAX CITY</span>
                    </div>
                    <div className="com2">
                        <img src={AVAX} alt="" />
                        <span>AVAX CITY</span>
                    </div>
                </div>
            </div>
            <Partners />
        </div>
    );
};
export default Portfolio;
