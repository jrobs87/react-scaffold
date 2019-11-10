import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

// First of four page template routes.
function RouteIndex() {
    console.log("Rendered path '/route-index' - RouteIndex.");

    // const button = {
    //     background: '#6E2594',
    //     color: 'white',
    //     border: '1px solid #6E2594',
    //     marginRight: '1em'
    // }

    return (
        <div className="page-wrapper">
            <Fade duration={222} delay={222} >
                <Container>
                    <Row>
                        <Col lg={6}>
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
                                <li><Link to='/' exact >Route - Home</Link></li>
                                <li><Link to='/route-1'>Route - One</Link></li>
                                <li> <Link to='/route-2'>Route - Two</Link> </li>
                                <li><Link to='/route-api'>Route - API</Link> </li>
                                <li> <Link to='/notfound'>Route - 404</Link> </li>
                                <li>Route - Index</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h4>Components</h4>
                        </Col>
                        <Col lg={4}>
                            <h4>Future Improvements</h4>
                            <ul>
                                <li>Global State (React Context)</li>
                                <li>Node / Express Server</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </div>
    );
}

export default RouteIndex;
