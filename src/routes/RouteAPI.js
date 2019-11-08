import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class RouteAPI extends Component {
    state = {
        data: {}
    }

    apiKey = '65f442d2887f1b26eb19ee6075e6da55';
    url = `http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&APPID=${this.apiKey}`;

    componentDidMount() {
        fetch(this.url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    data: data
                });
                console.log(this.state.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.data.cod === 401 || this.state.data.main === undefined) {
            return (
                <Fade duration={333} delay={333}>
                    <div className="page-wrapper">
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Route API</h1>
                                    <div>
                                        Unable to load data.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fade>
            )
        } else {
            return (
                <Fade duration={333} delay={333}>
                    <div className="page-wrapper">
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Route API</h1>
                                    <div>
                                        The current temp in {this.state.data.name} is {Math.round((this.state.data.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)} degrees.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fade>
            )
        }
    }
}

export default RouteAPI