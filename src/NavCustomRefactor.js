import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import './NavCustom.css';

class CustomNavNF extends Component {
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

        console.log('updating state...')
    }

    render() {
        console.log(`Menu rendered with active state: ${this.state.active}.`);
    
        return (
            <div>
                <div className={this.state.active ? "nav-modal-active nav-modal" : "nav-modal"} onClick={this.toggle}>
                    {/* nothing to see here - literally */}
                </div>
                <nav className={this.state.active ? "nav-menu-active nav-menu" : "nav-menu"}>

                    <div className={this.state.active ? "link-active link" : "link"}>
                        <nav >
                            <Link to='/' onClick={this.toggle} className="link-menu">Home</Link>
                            <Link to='/route-1' onClick={this.toggle} className="link-menu">Route One</Link>
                            <Link to='/route-2' onClick={this.toggle} className="link-menu">Route Two</Link>
                            <Link to='/todo' onClick={this.toggle} className="link-menu">ToDo List</Link>
                            <Link to='/notfound' onClick={this.toggle} className="link-menu">404 Page</Link>
                        </nav>
                    </div>
                </nav>

                <div onClick={this.toggle} className="nav-icon">
                    <div className="nav-icon-item">
                        {/* placeholder for menu icon */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomNavNF 