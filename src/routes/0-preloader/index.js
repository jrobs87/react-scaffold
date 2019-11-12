import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

// preloading img for 404
import img from '../imgs/giraffe.jpg';

// Homepage template.
function RouteZero() {
  console.log("Rendered path '/' - RouteZero.");

  const button = {
    background: '#6E2594',
    color: 'white',
    border: '1px solid #6E2594'
  }

  // hello world
  // hidden preloader div styling
  const preloader = {
    display: 'none'
  }

  return (
    <div className="page-wrapper">
      <h1>Preloader + Spinner</h1>
      <div style={preloader}>
        <img src={img} alt="giraffe"></img>
      </div>
    </div>
  );
}

export default RouteZero;
