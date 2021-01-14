import React from 'react';

import NavBar from "../NavBar/NavBar";
import SpaceStation from "./SpaceStation";
import Info from "./Info";

import "./Header.css";

function Header() {
    return (
        <div className="header-container">
            <NavBar />
            <div className="main-body">
                <SpaceStation />
                <div className="spacer">
                    <div className="intro-container">
                        <img src="/header-img.png" alt="profile"/>
                        <p>Hello, my name is Josh. I love to code. Want to take a look?</p>
                    </div>
                </div>
                <Info />
            </div>
        </div>
    )
}

export default Header
