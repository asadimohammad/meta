import React from "react";
import "../../styles/portfolio.css";
import NFTCUSTOMIZER from "../../images/NFTCUSTOMIZER.png";
import AVAX from "../../images/AVAX.png";
import AMERICAN from "../../images/AMERICAN.png";
import NFTGENARATOR from "../../images/NFTGENARATOR.png";
import SOL from "../../images/SOL.png";
import TURKISH from "../../images/TURKISH.png";

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className=" d-flex-center">
                <div className="ellip">
                    <span>PORTFOLIO</span>
                </div>
            </div>
            <div className="companies">
                <div className="com6">
                    <img src={NFTCUSTOMIZER} alt="" />
                    <span>NFT CUSTOMIZER</span>
                </div>
                <div className="com5">
                    <img src={NFTGENARATOR} alt="" />
                    <span>NFT GENARATOR</span>
                </div>
                <div className="com4">
                    <img src={TURKISH} alt="" />
                    <span>TURKISH METAVERSE</span>
                </div>
                <div className="com3">
                    <img src={AMERICAN} alt="" />
                    <span>US AMERICAN LANDS</span>
                </div>
                <div className="com2">
                    <img src={SOL} alt="" />
                    <span>SOL CITY</span>
                </div>
                <div className="com1">
                    <img src={AVAX} alt="" />
                    <span>AVAX CITY</span>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;
