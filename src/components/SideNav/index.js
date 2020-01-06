import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class SideNav extends Component {
    // Event Handler for toggling Nav visiblity.
    handleClick = (e) => {
        e.stopPropagation(); // prevent event bubbling (reducing script time for simple event)

        // Declaring elements for class toggles.
        const wrapper = document.getElementById('wrapper');
        const modal = document.getElementById("nav__modal");
        const navList = document.getElementById("nav__list");

        // Toggle nav menu classes.
        wrapper.classList.toggle('is-nav-open');
        modal.classList.toggle('is-nav-modal-active');
        navList.classList.toggle("is-nav-list-open");
    }

    // Required Render() - only required method of a Component.
    render() {
        return (
            <div>
                {/* Nav Icon > Toggle Nav Visibility - bound to Toggle(). */}
                <div className="nav-icon" onClick={this.handleClick}>
                    Nav
                    </div>

                {/* Nav Body - Nav List bound to Toggle(). */}
                <div className="nav__body" id="wrapper">
                    <nav id="nav__list" className="nav-list">
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/' exact >Route - Home</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-1'>Route - One</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-2'>Route - Two</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-api'>Route - API</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/notfound'>Route - 404</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-rtg'>Route - RTG</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-sandbox'>Route - Sandbox</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-sandbox-nav'>Route - Sandbox Nav</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-sandbox-nav-static'>Route - Sandbox Nav Static</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-sandbox-api'>Route - Sandbox API</NavLink>
                        <br />
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-index'>Route - Index</NavLink>
                    </nav>
                </div>

                {/* Nav Modal - Bound to Toggle(). */}
                <div id="nav__modal" className="nav-modal" onClick={this.handleClick} />
                {/* Empty by default but easily modified. */}
            </div>
        )
    }
}