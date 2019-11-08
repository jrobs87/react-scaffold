import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

// First of four page template routes.
function RouteIndex() {
    console.log("Rendered path '/' - RouteIndex.")
    return (
        <Fade duration={333} delay={333}>
            <Container fluid={false} className="page-wrapper">
                <Row>
                    <Col>
                        <h1>App Index</h1>
                        <p>Index of all Routes and Components</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <h3>Routes</h3>
                        <ul>
                            <li>
                                <NavLink to='/' exact >Route - Zero</NavLink>
                            </li>
                            <li>
                                <NavLink to='/route-1'>Route - One</NavLink>
                            </li>
                            <li>
                                <NavLink to='/route-2'>Route - Two</NavLink>
                            </li>
                            <li>
                                <NavLink to='/route-index'>Route - Index</NavLink>
                            </li>
                            <li>
                            <NavLink to='/route-api'>Route - API</NavLink>
                            </li>
                            <li>
                                <NavLink to='/notfound'>Route - 404</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <h3>Components</h3>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}

export default RouteIndex;
