import React from 'react';
import { Container, Col, Row } from '../Grid';
import backgroundPattern from '../../img/pattern.png';
import GCPphotoCredit from '../GCPphotoCredit/GCPphotoCredit.js';

const style = {
  backgroundImage: `url(${backgroundPattern})`,
  color: "white",
  position: "fixed",
  width: "100%",
  bottom: 0,
  opacity: 0.95
}

const Footer = props => {
  return (
    <footer style={style}>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <br />
            <p className="text-center">
              © 2017 Copyright: Redeye Solo
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p className="text-center">
              <GCPphotoCredit />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;