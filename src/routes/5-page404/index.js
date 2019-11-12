import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
// import img from '../../imgs/giraffe.jpg';
import img from '../../imgs/cat.jpg';

const style = {
    page: {
        background: '#1B1B1E',
        minHeight: '100vh',
        color: '#ffffff', 
        paddingTop: 0
    },
    pageInner: {
        // backgroundImage: `url(${img})`,
        // minHeight: '100vh',
        // backgroundSize: 'cover',
        // backgroundPosition: 'right',
        paddingTop: '6em',
    },
    header: {
        color: '#1B1B1E'
    }
}

function RouteNotFound() {
    console.log("Rendered path '/not-found' - RouteNotFound.");
    return (
        <div className="page-wrapper" style={style.page}>
            
                <div style={style.pageInner}>
                <Fade duration={222} delay={222}>
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
                                    <Button className='btn'>
                                        Homepage
                                </Button>
                                </Link>
                                <Link to='/route-index'>
                                    <Button className='btn'>
                                        App Index
                                </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    </Fade>
                </div>
            
        </div>
    )
}

export default RouteNotFound