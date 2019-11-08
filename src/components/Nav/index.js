import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            classList: ['nav-modal']
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            active: !state.active
        }));
        console.log('Updating Nav state.')
    }

    render() {
        console.log(`Menu state: ${this.state.active}.`);
        return (
            <div>
                <div className={this.state.active ? "nav-modal-active nav-modal" : "nav-modal"} onClick={this.toggle}>
                    {/* Empty Nav Modal - click to close Nav in active state. */}
                </div>
                <nav className={this.state.active ? "nav-menu-active nav-menu" : "nav-menu"}>
                    <div className={this.state.active ? "link-active link" : "link"}>
                        <nav >
                            <NavLink onClick={this.toggle} className="link-menu" activeClassName="link-active-route" to='/' exact >Route - Zero</NavLink>
                            <NavLink onClick={this.toggle} className="link-menu" activeClassName="link-active-route" to='/route-1'>Route - One</NavLink>
                            <NavLink onClick={this.toggle} className="link-menu" activeClassName="link-active-route" to='/route-2'>Route - Two</NavLink>
                            <NavLink onClick={this.toggle} className="link-menu" activeClassName="link-active-route" to='/route-index'>Route - Index</NavLink>
                            <NavLink onClick={this.toggle} className="link-menu" activeClassName="link-active-route" to='/notfound'>Route - 404</NavLink>
                        </nav>
                    </div>
                </nav>
                <div onClick={this.toggle} className="nav-icon">
                    <div className="nav-icon-item">
                        {/* Nav Icon Placeholder */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav 