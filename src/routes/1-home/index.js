import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Gallery from 'react-photo-gallery';

import img1 from '../../imgs/IMG_0180.JPG';
import img2 from '../../imgs/IMG_0181.JPG';
import img3 from '../../imgs/IMG_0182.JPG';
import img4 from '../../imgs/IMG_0183.JPG';
import img5 from '../../imgs/IMG_0184.JPG';

import './index.css';


// Homepage template.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.");

  const photos = [
    {
      src: img1,
      width: 9,
      height: 6
    },
    {
      src: img2,
      width: 1,
      height: 1
    },
    {
      src: img3,
      width: 1,
      height: 1
    },
    {
      src: img4,
      width: 1,
      height: 1
    },
    {
      src: img5,
      width: 1,
      height: 1
    }
  ];


  

  return (
    <Fade duration={100} delay={100}>
      <div className="page-wrapper">
        <Container fluid={false}>
          <Row>
            <Col lg={4} md={6}>
              <h3>React Scaffold</h3>
              <p>Root route for the application serving as the homepage.
                Change the Component name and config in the index.js file (found in the Router component).</p>
              <Link to='/route-index'>
                <Button className='btn'>
                  App Index
                  </Button>
              </Link>
            </Col>
            <Col>
            <Gallery photos={photos} direction={"column"} lightbox/>
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>
  );
}

export default RouteZero;
