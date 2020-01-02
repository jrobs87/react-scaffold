import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import './index.css';

export default class Sandbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        }

        this.load = this.load.bind(this);
    }

    // Simple Component Method
    load = () => {
        this.setState(({
            data: !this.state.data
        }))
        console.log(`Component updated from render() with updated state of ${this.state.data}`)
    };

    render() {
        return (
            <section className="page-wrapper">
                <Container>
                    <Row>
                        <Col>
                            <h3>Component Class</h3>
                            <p>Basic Stateful Component with a state bound to a click event.</p>
                            <p>Current state: <strong>{this.state.data.toString()}</strong></p>
                            <button onClick={this.load} className="btn">Load</button>
                        </Col>
                    </Row>
                </Container>


            </section>
        )
    }
}