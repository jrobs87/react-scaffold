import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from 'react-reveal';

function RouteOne() {
    return (
        <Fade duration={333} delay={333}>
            <div className="page-wrapper">
                <Container fluid={false}>
                    <Row>
                        <Col lg={6}>
                            <h1>Route One</h1>
                            <p>Ready-made template route.  Change the Component name and respective config in the index.js file (Router).</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    )
}

export default RouteOne