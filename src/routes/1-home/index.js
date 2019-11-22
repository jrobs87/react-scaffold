import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

import img from '../../imgs/yoga.jpg'

import './index.css';

const style = {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'left'
}

// Homepage template.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.");

  return (
    <Fade duration={300} delay={200}>
      <div className="page-wrapper" style={style}>
        <Container fluid={false}>
          <Row>
            <Col lg={4} md={6}>
              <h1>Homepage</h1>
              <h3>App Entry Point</h3>
              <p>Root route for the application serving as the homepage.
                Change the Component name and config in the index.js file (found in the Router component).</p>
              <Link to='/route-index'>
                <Button className='btn'>
                  App Index
                  </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>
  );
}

export default RouteZero;
