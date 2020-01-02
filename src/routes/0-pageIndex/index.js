import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';

// First of four page template routes.
function RouteIndex() {
    console.log("Rendered path '/route-index' - RouteIndex.");

    return (
        <div className="page-wrapper">
        <Fade duration={100} delay={100}>
                <Container>
                    <Row>
                        <Col className="col" lg={12}>
                            <h1>App Index</h1>
                            <h3>Index of all Routes and Components</h3>
                            <p>Routes are equivalent to pages in client-side routing.
                            Components make up different UI elements within each Route.
                            Note that each page contains a root div with the class "page-wrapper" serving as a base class for all pages (modify in src/index.css).</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col" lg={4}>
                            <h4>Routes (pages)</h4>
                            <ul>
                                <li><Link to='/'>Route - Home</Link></li>
                                <li><Link to='/route-1'>Route - One</Link></li>
                                <li> <Link to='/route-2'>Route - Two</Link> </li>
                                <li><Link to='/route-api'>Route - API</Link> </li>
                                <li> <Link to='/notfound'>Route - 404</Link> </li>
                                <li> <Link to='/route-rtg'>Route - RTG</Link> </li>
                                <li> <Link to='/route-sandbox'>Route - Sandbox</Link> </li>
                                <li>Route - Index (current route)</li>
                            </ul>
                        </Col>
                        <Col className="col" lg={4}>
                            <h4>Components</h4>
                        </Col>
                        <Col className="col" lg={4}>
                            <h4>Future Improvements</h4>
                            <ol>
                                <li>Global State (React Context)</li>
                                <li>Node / Express Server</li>
                                <li>Splash Page / Preloader</li>
                            </ol>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={12}>
                            <h4>NPM Modules</h4>
                            <ol>
                                <li>React Router DOM - client-side routing utility</li>
                                <li>React Transition Group - transition tool for elements entering/leaving DOM</li>
                                <li>React Reveal - utility for simple transitions and animations on load (scroll-enabled)</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
                </Fade>
        </div>
    );
}

export default RouteIndex;
