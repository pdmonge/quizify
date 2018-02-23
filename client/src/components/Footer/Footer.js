import React from 'react';
// import { Container, Col, Row } from '../Grid';
import { Grid, Col, Row } from "react-bootstrap";
// import backgroundPattern from '../../img/pattern.png';
import GCPphotoCredit from '../GCPphotoCredit/GCPphotoCredit.js';

const style = {
  // backgroundImage: `url(${backgroundPattern})`,
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white",
  position: "fixed",
  width: "100%",
  bottom: 0,
  opacity: 0.95
}

const Footer = props => {
  return (
    <footer style={style}>
      <Grid >
        <Row className="show-grid" >
          <Col md={12}>
            <br />
            <p className="text-center">
              Created 2017 by Partha Monge<br/>License: GNU Lesser GPL Version 3, 29 June 2007
            </p>
          </Col>
        </Row>
        <Row className="show-grid" >
          <Col md={12}>
            <p className="text-center">
              <GCPphotoCredit />
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;