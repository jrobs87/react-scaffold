import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import img from '../imgs/giraffe.jpg';

const style = {
    page: {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        minHeight: '100vh',
        color: 'white'
    },
    header: {
        color: 'white'
    }
}

const button = {
    background: 'white',
    color: 'black',
    border: '1px solid white',
    marginRight: '1em'
}

function RouteNotFound() {
    console.log("Rendered path '/not-found' - RouteNotFound.");
    return (
        // <Fade duration={0} delay={0}>
            <div className="page-wrapper" style={style.page}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1 style={style.header}>404 Page</h1>
                            <h3 style={style.header}>Route for Missing Links</h3>
                            <br />
                            <p>React Router Switch catches any undefined route and directs here.<br />
                                See Nav Component for the React Router configuration.</p>
                            <br />
                            <Link to='/'>
                                <Button className='btn' style={button}>
                                    Homepage
                                </Button>
                            </Link>
                            <Link to='/route-index'>
                                <Button className='btn' style={button}>
                                    App Index
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        // </Fade>
    )
}

export default RouteNotFound