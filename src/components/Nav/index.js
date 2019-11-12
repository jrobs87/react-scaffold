import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            active: !state.active
        }));
    }

    render() {
        return (
            <div>
                <div className={this.state.active ? "nav-modal-active nav-modal" : "nav-modal"} onClick={this.toggle}>
                    {/* Empty Nav Modal - click to close Nav in active state. */}
                    <div className={this.state.active ? "modal-text-active modal-text" : "modal-text"}>
                        Nav Modal
                    </div>
                </div>
                <nav className={this.state.active ? "nav-container-active nav-container" : "nav-container"}>
                    <div className={this.state.active ? "nav-menu-active nav-menu" : "nav-menu"}>
                        <div className="nav-logo">Nav Logo</div>
                        <nav >
                            <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/' exact >Route - Home</NavLink>
                            <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-1'>Route - One</NavLink>
                            <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-2'>Route - Two</NavLink>
                            <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-api'>Route - API</NavLink>
                            <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/notfound'>Route - 404</NavLink>
                            <br />
                            <NavLink onClick={this.toggle} className="nav-link" activeClassName="nav-link-active" to='/route-index'>Route - Index</NavLink>
                        </nav>
                    </div>
                </nav>
                <div onClick={this.toggle}>
                    <Fade duration={222} delay={222}>
                        <div className={this.state.active ? "nav-icon-item-active nav-icon-item" : "nav-icon-item"}>
                            {/* Nav Icon Placeholder */}
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Nav 