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
                            <h1>Cursor Follow</h1>
                            <CursorFollow />
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}