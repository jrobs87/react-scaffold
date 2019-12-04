import React from 'react';
import { Container, Col, Row } from 'reactstrap';
// import { CSSTransition } from 'react-transition-group';
// import CursorFollow from '../../components/CursorFollow';
// import SideNavFixed from '../../components/SideNavFixed';

import './index.css';

export default class Sandbox extends React.Component {

    load = () => {
        const overlay = document.getElementById("overlay");
        const overlayBody = document.getElementById("overlay__body");
        const header = document.getElementById("header");
        const sectionOneBlock = document.getElementById("sectionOneBlock");
        console.log(overlay);
        overlay.classList.toggle("overlay-is-active");
        overlayBody.classList.toggle("overlay__body-is-active");
        header.classList.toggle("header-is-active");
        sectionOneBlock.classList.toggle("sectionOneBlock-is-active")
    };

    render() {
        return (
            <div>
                <section>
                    <div className="sectionOne">
                        <div className="header" id="header">
                            <div className="headerH1">Full Stack Web</div>
                            <p>I design and code full stack baller shit.  I specialize in UI and front end work.</p>
                        </div>
                        <button className="trigger" onClick={this.load}>Load</button>
                    </div>
                    <div id="sectionOneBlock" className="sectionOneBlock">

                    </div>
                    <div className="sectionTwo">

                    </div>
                    <Container fluid id="overlay" className="overlay">
                        <div id="overlay__body" className="overlay__body">
                            <Row>
                                <Col lg={6} style={{ paddingTop: '8rem', paddingLeft: '8rem', background: 'white' }}>
                                    <div className="headerH2">
                                        Hello.  I am John Robertson, <span style={{ fontWeight: '700', fontStyle: "italic" }}>a Web Developer in Atlanta, GA.</span>
                                    </div>
                                </Col>
                                <Col lg={6}>

                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} style={{ paddingLeft: "8rem", paddingRight: '2rem', color: 'grey' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </Col>
                                <Col lg={6} style={{ paddingRight: '7rem', paddingLeft: '4rem', color: 'grey' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}