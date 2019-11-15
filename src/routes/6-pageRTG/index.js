import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

class ReactTransitionGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    render() {
        return (
            <div className="page-wrapper">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1>React Transition Group</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ReactTransitionGroup