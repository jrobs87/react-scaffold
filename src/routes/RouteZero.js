import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

// First of four page template routes.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.")
  return (
      <Container fluid={ false } className="page" >
        <Row>
          <Col>
            <Fade duration={ 333 } delay={ 333 }>
              <h1>App Entry Point</h1>
              <p>Root route for the application. Change the Component name and respective config in the index.js file (React Router).</p>
            </Fade>
          </Col>
        </Row>
      </Container>
  );
}

export default RouteZero;
