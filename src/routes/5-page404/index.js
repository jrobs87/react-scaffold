import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import img from '../../imgs/giraffe.jpg';

const style = {
    page: {
        // backgroundImage: `url(${img})`,
        background: '#292F36',
        // backgroundSize: 'cover',
        // backgroundPosition: 'right',
        minHeight: '100vh',
        color: 'white',
        paddingTop: 0
    },
    pageInner: {
        backgroundImage: `url(${img})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        paddingTop: '6em'
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
        <div className="page-wrapper" style={style.page}>
            <Fade duration={111} delay={111}>
                <div style={style.pageInner}>
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
            </Fade>
        </div>
    )
}

export default RouteNotFound