import React, { Component } from "react";

class Header extends Component {
    state = {
        isMobile: false
    }

    render() {
        // {console.log(this.state)};
        return (

            <div className="navbar header-container-wrapper container-fluid">
                <nav class="navbar">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                            About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> 
        )
    }
}
export default Header;