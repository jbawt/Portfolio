import React from 'react';

import "./NavBar.css";

function NavBar() {
    return (
        <div className="nav-container">
            <div className="name">
                <h1>Josh Bawtinheimer</h1>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
