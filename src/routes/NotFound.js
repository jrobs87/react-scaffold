import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function NotFound() {
    return (
        <Container className="page">
            <Row>
                <Col>
                    <h1>404</h1>
                    <p>Route for missing links (Router Switch).</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound