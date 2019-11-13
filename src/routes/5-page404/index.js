import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

import './index.css'

function RouteNotFound() {
    console.log("Rendered path '/not-found' - RouteNotFound.");
    return (
        <div className="page-wrapper">
            <div>
                <Fade duration={222} delay={222}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h1>404 Page</h1>
                                <h3>Route for Missing Links</h3>
                                <br />
                                <p>React Router Switch catches any undefined route and directs here.<br />
                                    See Nav Component for the React Router configuration.</p>
                                <br />
                                <Link to='/'>
                                    <Button className='btn'>
                                        Homepage
                                </Button>
                                </Link>
                                <Link to='/route-index'>
                                    <Button className='btn'>
                                        App Index
                                </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </div>
        </div>
    )
}

export default RouteNotFound