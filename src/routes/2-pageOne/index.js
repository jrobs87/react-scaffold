import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';

function RouteOne() {
    console.log("Rendered path '/route-1' - RouteOne.");

    return (
        <div className="page-wrapper">
            <Fade duration={222} delay={222}>
                <Container fluid={false}>
                    <Row>
                        <Col lg={12}>
                            <h1>Route One</h1>
                            <h3>1 of 2 Page Templates</h3>
                            <br />
                            <p>Ready-made template route.  Change the Component name and respective config in the index.js file (Router).</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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
    )
}

export default RouteOne