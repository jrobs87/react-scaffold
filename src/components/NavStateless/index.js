import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class NavStateless extends Component {

    handleClick = (e) => {
        e.stopPropagation();

        const wrapper = document.getElementById('wrapper');
        const modal = document.getElementById("nav__modal");

        wrapper.classList.toggle('is-nav-open');
        modal.classList.toggle('is-nav-modal-active');
    }

    render() {
        return (
            <div>
                <div className="nav-icon" onClick={this.handleClick}>
                    Navigation
                </div>

                <div className="nav__body" id="wrapper">
                    <nav >
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/' exact >Route - Home</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-1'>Route - One</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-2'>Route - Two</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-api'>Route - API</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/notfound'>Route - 404</NavLink>
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-rtg'>Route - RTG</NavLink>
                        <br />
                        <NavLink onClick={this.handleClick} className="nav-link" activeClassName="nav-link-active" to='/route-index'>Route - Index</NavLink>
                    </nav>
                </div>

                <div id="nav__modal" className="nav-modal" onClick={this.handleClick}>Modal</div>
            </div>
        )
    }



}