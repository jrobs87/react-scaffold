import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from 'react-reveal';
import img from './imgs/jared-rice-ujNuUPN12z0-unsplash.jpg'

function RouteOne() {
    const style = {
        paddingTop: '10em',
        width: '100%',
        height: '100vh',
        background: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        color: 'white'
    }

    return (
        <Fade duration={333} delay={333}>
            <Container fluid style={style}>
                <Row>
                    <Col>
                        <h1>Route One</h1>
                        <p>Example of animation with React Transition Group.</p>
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}

export default RouteOne