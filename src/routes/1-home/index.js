import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

// preloading img for 404
import img from '../../imgs/giraffe.jpg';

// Homepage template.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.");

  const button = {
    background: '#6E2594',
    color: 'white',
    border: '1px solid #6E2594'
  }

  // hidden preloader div styling
  const preloader = {
      display: 'none'
  }

  return (
    <div className="page-wrapper">
      <Fade duration={222} delay={222}>
        <Container fluid={false}>
          <Row>
            <Col lg={6}>
              <h1>Homepage</h1>
              <h3>App Entry Point</h3>
              <br />
              <p>Root route for the application serving as the homepage.
                Change the Component name and config in the index.js file (found in the Router component).</p>
              <Link to='/route-index'>
                <Button className='btn' style={button}>
                  App Index
                  </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fade>

      <div style={preloader}>
        <img src={ img } alt="giraffe"></img>
      </div>
    </div>
  );
}

export default RouteZero;
