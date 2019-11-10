import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <div className="modal-text">
                        Nav Modal
                    </div>
                </div>
                <nav className={this.state.active ? "nav-container-active nav-container" : "nav-container"}>
                    <div className={this.state.active ? "nav-menu-active nav-menu" : "nav-menu"}>
                        <div className="nav-logo">Nav Brand</div>
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
                <div onClick={this.toggle} className="nav-icon">
                    <div className="nav-icon-item">
                        {/* Nav Icon Placeholder */}
                        M
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav 