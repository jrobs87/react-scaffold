import React from 'react';
import { NavLink } from "react-router-dom";

import img from '../../imgs/logoSwarm.png';

import './index.css';

// Declaring the Component Name and Log method.
const log = function (message) {
    console.log(`SideNavFixed: ${message}.`);
}

export default class SideNavFixed extends React.Component {
    // Declaring elements to modify.



    // Confirming the Component mounted to the DOM.
    componentDidMount() {
        log('mounted');
    }

    toggle = (e) => {
        log('nav toggled');
        const navBody = document.getElementById("nav-side-fixed");
        const navList = document.getElementById("nav-side-fixed__body");
        navBody.classList.toggle("nav-side-fixed-is-active");
        navList.classList.toggle("nav-side-fixed__body-is-active");

    }

    render() {
        return (
            <div>
                <div id="nav-side-fixed-anchor" className="nav-side-fixed-anchor">
                    <div id="nav-side-fixed-anchor__icon" className="nav-side-fixed-anchor__icon" onClick={this.toggle}>
                    <img src={img} alt="swarm agency" style={{ width: "60px"}}></img>
                    </div>
                </div>

                {/* SideNavFixed - Nav Component with fixed sidebar and full screen modal. */}
                <div id="nav-side-fixed" className="nav-side-fixed">

                    <div id="nav-side-fixed__body" className="nav-side-fixed__body">
                        <nav id="nav-side-fixed__list" className="nav-side-fixed__list">
                            <div className="nav-side-fixed__link">
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/' exact >Route - Home</NavLink>
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-1'>Route - One</NavLink>
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-2'>Route - Two</NavLink>
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-api'>Route - API</NavLink>
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/notfound'>Route - 404</NavLink>
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-rtg'>Route - RTG</NavLink>
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-sandbox'>Route - Sandbox</NavLink>
                                <br />
                                <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-index'>Route - Index</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>

                <div id="nav-side-fixed-modal" className="nav-side-fixed-modal">
                    {/* Nothing to see here */}
                </div>
            </div>
        )
    }
}