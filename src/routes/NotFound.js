import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function NotFound() {
    const style = {
        main: {
            paddingTop: '1em',
            width: '100%',
            height: '100vh',
            fontSize: '13em',
        }
      }

    return (
        <Container style={ style.main }>
            <Row>
                <Col>
                    404
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound