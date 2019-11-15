import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";

function RouteTwo() {
    console.log("Rendered path '/route-2' - RouteTwo.");

    return (
        <div className="page-wrapper">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1>Route Two</h1>
                        <h3>2 of 2 Page Templates</h3>
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
        </div>
    )
}

export default RouteTwo