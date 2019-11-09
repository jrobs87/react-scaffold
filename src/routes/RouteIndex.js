import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

// First of four page template routes.
function RouteIndex() {
    console.log("Rendered path '/route-index' - RouteIndex.")
    return (
        <div className="page-wrapper">
            <Fade duration={0} delay={0} >
                <Container fluid={false}>
                    <Row>
                        <Col>
                            <h1>App Index</h1>
                            <h3>Index of all Routes and Components</h3>
                            <br />
                            <p>Routes are equivalent to pages in client-side routing.
                            Components make up different UI elements within each Route.
                            Note that each page contains a root div with the class "page-wrapper" serving as a base class for all pages (modify in src/index.css).</p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={4}>
                            <h4>Routes (pages)</h4>
                            <ul>
                                <li><NavLink to='/' exact >Route - Home</NavLink></li>
                                <li><NavLink to='/route-1'>Route - One</NavLink></li>
                                <li> <NavLink to='/route-2'>Route - Two</NavLink> </li>
                                <li><NavLink to='/route-api'>Route - API</NavLink> </li>
                                <li> <NavLink to='/notfound'>Route - 404</NavLink> </li>
                                <li> <NavLink to='/route-index'>Route - Index</NavLink> </li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h4>Components</h4>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </div>
    );
}

export default RouteIndex;
