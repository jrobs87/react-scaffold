import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function ToDo() {
    const style={
        paddingTop: '10em'
      }

    return (
        <Container style={ style }>
            <Row>
                <Col>
                    <h1>ToDo List</h1>
                </Col>
            </Row>
        </Container>

    )
}

export default ToDo;