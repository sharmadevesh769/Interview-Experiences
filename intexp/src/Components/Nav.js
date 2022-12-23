import React from "react";
import logolite from "../img/logo-lite.png"
const Nav = () => {
    return (
        <div className="Nav">
            <div className="Nav-Logo">
                <img src={logolite} width="100px" height="100px" alt="Logo" />
                <h1 className="Logo-title">IntEXP</h1>
            </div>
            <div className="Nav-mid">
                <a href="/Home" className="mid-bt">
                    Home
                </a>
                <a href="Exp" className="mid-bt">
                    Experience
                </a>
                <a href="Resources" className="mid-bt">
                    Resources
                </a>
                <a href="About" className="mid-bt">
                    About Us
                </a>
                <a href="Contact" className="mid-bt">
                    Contact Us
                </a>
            </div>
            <div className="signin-cont">
                <a href="/" className="signin-bt">
                    Sign In
                </a>
            </div>
        </div>
    );
};


export default Nav;
