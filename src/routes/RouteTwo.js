import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from "react-reveal/Fade";

function RouteTwo() {
    console.log("Rendered path '/route-2' - RouteTwo.");
    return (
        <div className="page-wrapper">
            <Fade duration={333} delay={333}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1>Route Two</h1>
                            <h3>2 of 2 Page Templates</h3>
                            <br />
                            <p>Ready-made template route.  Change the Component name and respective config in the index.js file (Router).</p>
                        </Col>
                    </Row>
                </Container>
            </Fade >
        </div>
    )
}

export default RouteTwo