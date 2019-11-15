import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';

import './index.css';


// Homepage template.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.");

  return (
    <div className="page-wrapper">
      <Container fluid={false}>
        <Row>
          <Col lg={6}>
            <h1>Homepage</h1>
            <h3>App Entry Point</h3>
            <br />
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
  );
}

export default RouteZero;
