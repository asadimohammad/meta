import React from "react";
import '.././../styles/whatToDo.css'

const WhatToDo = () => {
    return (
        <div className="whatToDo d-flex-center" id="whatWeDo">
            <div className="leftSec">
                <div className="txt1">3D NFT Rooms</div>
                <div className="txt2">Procedural Generation</div>
                <div className="txt3">3D NFT Collections</div>
                <div className="txt4">Virtual Reality Platforms</div>
            </div>
            <div className="centertSec d-flex-center">
                <span>WHAT WE DO ?</span>
            </div>
            <div className="rightSec">
                <div className="txt1">
                    Compatible With All Available Blockchains ( Ethereum,
                    Solana, Polygon,.. )
                </div>
                <div className="txt2">Technology And Art Solution For The Metaverse</div>
                <div className="txt3">
                    Get Your Metaverse For Browser or Standalone Project with
                    Unreal Engine
                </div>
            </div>
        </div>
    );
};

export default WhatToDo;
