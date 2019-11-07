import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function NotFound() {
    const style={
        paddingTop: '10em',
        width: '100%',
        height: '100vh'
      }

    return (
        <Container style={ style }>
            <Row>
                <Col>
                    <h1>404</h1>
                    <p>You have reached the singularity!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound