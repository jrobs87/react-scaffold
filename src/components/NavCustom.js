import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavCustom.css'

class CustomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            state: 'closed'
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            open: !state.open
        }))
    }

    render() {
        const navMenu = {
            hidden: {
                height: '100vh',
                minWidth: '10em',
                top: 0,
                right: '-16em',
                position: 'fixed',
                zIndex: 1000,
                transitionDuration: '0.44s',
                transitionTimingFunction: 'cubic-bezier(.25,.1,.25,1)',
                transitionDelay: '0.06s',
                opacity: 0,
                // background: 'white',
                color: '#A599B5',
                padding: '6em 3em 0 3em',
                // fontSize: '2em'
            },
            visible: {
                height: '100vh',
                minWidth: '10em',
                top: 0,
                right: 0,
                position: 'fixed',
                zIndex: 1000,
                transitionDuration: '0.44s',
                transitionTimingFunction: 'cubic-bezier(.25,.1,.25,1)',
                transitionDelay: '0s',
                opacity: 0.96,
                background: '#6874E8',
                color: '#A599B5',
                padding: '6em 3em 0 3em',
                // fontSize: '2em'
            }
        };

        const navIcon = {
            hidden: {
                padding: 0,
                background: 'none',
                color: '#2E2F2F',
                border: 'none',
                position: 'fixed',
                top: '2em',
                left: '3em',
                zIndex: 1000,
                transitionDuration: '0.22s',
                transitionDelay: '0.12s'
            },
            active: {
                padding: 0,
                background: 'none',
                color: 'white',
                border: 'none',
                position: 'fixed',
                top: '2em',
                right: '3em',
                zIndex: 1500,
                transitionDuration: '0.33s',
                transitionDelay: '0s'
            }

        }

        const navItem = {
            hidden: {
                opacity: 0,
                transitionDuration: '0s',
                transitionDelay: '0s',
                transitionTimingFunction: 'cubic-bezier(.25,.1,.25,1)',
                color: 'black',
                textDecoration: 'none',
                position: 'relative',
                right: '-0.5em',
                top: '0.25em'
            },
            active: {
                transitionDuration: '.22s',
                transitionDelay: '0.28s',
                transitionTimingFunction: 'cubic-bezier(.25,.1,.25,1)',
                opacity: 1,
                color: 'white',
                textDecoration: 'none',
                position: 'relative',
                right: '0em',
                top: '0em'
            }
        }

        const navModal = {
            hidden: {
                zIndex: -500,
                height: '100vh',
                width: '100%',
                background: 'white',
                opacity: 0,
                position: 'fixed',
                transitionDuration: '.11s',
                transitionDelay: '0.12s',
            },
            active: {
                zIndex: 500,
                opacity: 0.96,
                background: 'white',
                height: '100vh',
                width: '100%',
                position: 'fixed',
                transitionDuration: '0.22s',
                transitionDelay: '0s',
                top: 0
            }
        }

        // variable declarations for toggle styles
        let navMenuStyle = navMenu.hidden;
        let nav = navItem.hidden;
        let navModalStyle = navModal.hidden;
        let navIconStyle = navIcon.hidden;

        // toggle styles based on state
        if (this.state.open === true) {
            navMenuStyle = navMenu.visible;
            nav = navItem.active;
            navModalStyle = navModal.active;
            navIconStyle = navIcon.active;
        } else {
            navMenuStyle = navMenu.hidden;
            nav = navItem.hidden;
            navModalStyle = navModal.hidden;
            navIconStyle = navIcon.hidden;
        }

        return (
            <div>
                <Button onClick={this.toggle} style={navIconStyle} className='btn'>
                    MENU
                </Button>
                <nav style={navMenuStyle}>
                    <div>
                        <Link to='/' onClick={this.toggle} style={nav}>Home</Link>
                    </div>
                    <div>
                        <Link to='/route-1' onClick={this.toggle} style={nav}>Route One</Link>
                    </div>
                    <div>
                        <Link to='/route-2' onClick={this.toggle} style={nav}>Route Two</Link>
                    </div>
                    <div>
                        <Link to='/todo' onClick={this.toggle} style={nav}>ToDo List</Link>
                    </div>
                    <div>
                        <Link to='/notfound' onClick={this.toggle} style={nav}>404 Page</Link>
                    </div>
                    <div>
                        <Link to='/customNavRF' onClick={this.toggle} style={nav}>CustomNavNF</Link>
                    </div>
                </nav>

                <div style={navModalStyle} onClick={this.toggle}>
                    {/* nothing to see here */}
                </div>
            </div>

        )
    }
}

export default CustomNav;