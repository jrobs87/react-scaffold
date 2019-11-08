import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from "react-reveal/Fade";

function RouteTwo() {
    return (
        <Container className="page">
            <Row>
                <Col>
                <Fade duration={ 333 } delay={ 333 }>
                <h1>Route Two</h1>
                <p>Ready-made template route.  Change the Component name and respective config in the index.js file (Router).</p>
                </Fade>
                </Col>
            </Row>
        </Container>
    )
}

export default RouteTwo