import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import img from '../imgs/giraffe.jpg';

const style = {
    page: {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        color: 'white'
    },
    header: {
        color: 'white'
    }
}

function NotFound() {
    console.log("Rendered path '/not-found' - 404 Page.");
    return (
        <Fade duration={333} delay={333}>
            <div className="page-wrapper" style={style.page}>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={style.header}>404</h1>
                            <p>Route for missing links (Router Switch).</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    )
}

export default NotFound