import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class RouteAPI extends Component {
    state = {
        data: {}
    }

    apiKey = '65f442d2887f1b26eb19ee6075e6da55';
    url = `http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&APPID=${this.apiKey}`;

    style = {
        color: 'red'
    }

    properCase = function () {
        const string = this.state.data.weather[0].description;
        return string[0].toUpperCase() + string.slice(1);
    }

    componentDidMount() {
        fetch(this.url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    data: data
                });
                console.log(data)
                if (data.cod === 401) console.log("Rendered path '/route-api' - RouteAPI (w/o data).");
            })
            .catch(error => {
                console.log("Rendered path '/route-api' - RouteAPI (w/o data).")
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
                                    <h3>Simple API Example</h3>
                                    <br />
                                    <div style={this.style}>
                                        Unable to load data.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fade>
            )
        } else {
            console.log("Rendered path '/route-api' - RouteAPI (with data).")
            return (
                <div className="page-wrapper">
                    <Fade duration={ 333 } delay={ 333 }>
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Route API</h1>
                                    <h3>Simple API Example</h3>
                                    <br />
                                    <p>The current temp in {this.state.data.name} is {Math.round((this.state.data.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)} degrees with {this.state.data.wind.speed} mph winds.<br />
                                        {this.properCase()} with {this.state.data.main.humidity}% humidity.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                </div>
            )
        }
    }
}

export default RouteAPI