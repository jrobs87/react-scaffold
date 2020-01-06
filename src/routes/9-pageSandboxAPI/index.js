import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";

class SandboxAPI extends Component {
    state = {
        data: {}
    }

    // API configuration
    token = '';
    apiKey = '65f442d2887f1b26eb19ee6075e6da55';
    url = `https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&APPID=${this.apiKey}`;

    // style for failed API call
    style = {
        color: 'darkgrey'
    }

    // API call in componentDidMount lifecycle method (best practice)
    componentDidMount() {
        fetch(this.url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    data: data
                });
                if (data.cod === 401) console.log("Rendered path '/route-api' - SandboxAPI (w/o data).");
                // console.log(data);
            })
            .catch(error => {
                console.log("Rendered path '/route-api' - SandboxAPI (w/o data).");
                console.log(error);
            })
    }

    render() {
        return (
            <div className="page-wrapper">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1>Sandbox API</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to='/'>
                                <Button className='btn'>
                                    Homepage
                                 </Button>
                            </Link>
                            <Link to='/route-index'>
                                <Button className='btn'>
                                    App Index
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

export default SandboxAPI