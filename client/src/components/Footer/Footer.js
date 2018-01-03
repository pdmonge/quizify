import React from 'react';
import { Container, Col, Footer, Row } from 'mdbreact';
import GCPphotoCredit from './GCPphotoCredit/GCPphotoCredit';

const style = {
  backgroundColor: "#303030",
  color: "white",
  position: "fixed",
  width: "100%",
  bottom: 0
}

const Footer = props => {
  return (
    <footer style={style}>
      <Container fluid>
        <Row>
          <Col className="col-md-12">
            <br />
            <p className="text-center">
              © 2017 Copyright: Redeye Solo
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-12">
            <p className="text-center">
              <GCPphotoCredit />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterQ;