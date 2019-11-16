import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class NavStateless extends Component {
    // handleClick() {
    //     debugger;
    //     const wrapper = document.getElementById('wrapper');
    //     wrapper.classList.toggle('is-nav-open');
    //     console.log('clicked');
    // }

    handleClick = () => {
        console.log('yeet');
        // debugger;
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('is-nav-open');
        console.log('clicked');
    }

    render() {
        return (
            <div className="wrapper">

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
            </div>
        )
    }


    
}