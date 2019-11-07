import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img from './imgs/404panda.png';

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
                <img src={ img } alt="panda" style={{ height: '0.5em'}}></img>
                    404
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound