import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import img from '../imgs/kingfishers.jpg'

// First of four page template routes.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.");

  const style = {
    page: {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      minHeight: '100vh'
    }
  }

  return (
    <Fade duration={333} delay={333}>
      <div className="page-wrapper" style={ style.page }>
        <Container fluid={false}>
          <Row>
            <Col lg={ 6 }>
              <h1>App Entry Point</h1>
              <p>Root route for the application. Change the Component name and respective config in the index.js file (React Router).</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>
  );
}

export default RouteZero;
