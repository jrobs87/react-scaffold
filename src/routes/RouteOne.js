import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from 'react-reveal';
import img from '../imgs/ocean.jpg'

function RouteOne() {
    return (
        <Fade duration={ 333 } delay={ 333 }>
            <Container fluid={ false } className="page">
                <Row>
                    <Col>
                        <h1>Route One</h1>
                        <p>Ready-made template route.  Change the Component name and respective config in the index.js file (Router).</p>
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}

export default RouteOne