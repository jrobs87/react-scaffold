import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';

class RouteAPI extends Component {
    state = {
        data: {}
    }

    // API configuration
    apiKey = '65f442d2887f1b26eb19ee6075e6da55';
    url = `http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&APPID=${this.apiKey}`;

    // style for failed API call
    style = {
        color: 'darkgrey'
    }

    // Proper capitalization for API response data
    properCase = function () {
        const string = this.state.data.weather[0].description;
        return string[0].toUpperCase() + string.slice(1);
    }

    // API call in componentDidMount lifecycle method (best practice)
    componentDidMount() {
        fetch(this.url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    data: data
                });
                if (data.cod === 401) console.log("Rendered path '/route-api' - RouteAPI (w/o data).");
                // console.log(data);
            })
            .catch(error => {
                console.log("Rendered path '/route-api' - RouteAPI (w/o data).");
                console.log(error);
            })
    }

    button = {
        background: '#6E2594',
        color: 'white',
        border: '1px solid #6E2594',
        marginRight: '1em'
    }

    render() {
        // conditionally render based on API response validation
        if (this.state.data.cod === 401 || this.state.data.main === undefined) {
            // render if API response fails
            return (
                <div className="page-wrapper">
                    {/* <Fade duration={0} delay={0}> */}
                    <Container>
                        <Row>
                            <Col>
                                <h1>Route API</h1>
                                <h3>Simple API Example</h3>
                                <br />
                                <div style={this.style}>
                                    No data available!
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* </Fade> */}
                </div>
            )
        } else {
            console.log("Rendered path '/route-api' - RouteAPI (with data).");
            // render if API response succeeds
            return (
                <div className="page-wrapper">
                    {/* <Fade duration={0} delay={0}> */}
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
                        <Row>
                            <Col>
                                <Link to='/'>
                                    <Button className='btn' style={this.button}>
                                        Homepage
                                 </Button>
                                </Link>
                                <Link to='/route-index'>
                                    <Button className='btn' style={this.button}>
                                        App Index
                                </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    {/* </Fade> */}
                </div>
            )
        }
    }
}

export default RouteAPI