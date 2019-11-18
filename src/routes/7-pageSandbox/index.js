import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import CursorFollow from '../../components/CursorFollow';

export default class Sandbox extends React.Component {

    render() {
        return (
            <div className="page-wrapper">
                <Container>
                    <Row>
                        <Col>
                            <h1>Sandbox</h1>
                            <h2>Safe Space for Testing</h2>
                            <CursorFollow />
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}