import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';

function RouteOne() {
    console.log("Rendered path '/route-1' - RouteOne.");

    const button = {
        background: '#6E2594',
        color: 'white',
        border: '1px solid #6E2594',
        marginRight: '1em'
    }

    return (
        <div className="page-wrapper">
            <Fade duration={222} delay={222}>
                <Container fluid={false}>
                    <Row>
                        <Col lg={6}>
                            <h1>Route One</h1>
                            <h3>1 of 2 Page Templates</h3>
                            <br />
                            <p>Ready-made template route.  Change the Component name and respective config in the index.js file (Router).</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to='/'>
                                <Button className='btn' style={button}>
                                    Homepage
                                 </Button>
                            </Link>
                            <Link to='/route-index'>
                                <Button className='btn' style={button}>
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