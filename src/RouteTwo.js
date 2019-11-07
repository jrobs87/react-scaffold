import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function RouteTwo() {
    const style={
        paddingTop: '10em'
      }

    return (
        <Container style={ style }>
            <Row>
                <Col>
                <h1>Route Two</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default RouteTwo