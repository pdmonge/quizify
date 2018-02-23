import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Qnavbar from '../../Qnavbar';
import { Grid, Row, Col } from "react-bootstrap";

const style = {
  container: {
    display: "block",
    height: 100 + "%",
    width: 100 + "%",
    marginBottom: 125 + "px"
  },
  row: {
    paddingTop: "80px",
    height: "100vh"
  },
  card: {
    opacity: 0.9
  }
}

class LogoutPage extends Component {

  render() {
    return (
      <div>
        <Qnavbar page="logout" />
        <Grid fluid={true} style={style.container} >
          <Row className="show-grid justify-content-center" style={style.row} >
            <Col lg={6} md={8} xs={12} >
              <div className="card mb-3" style={style.card} >
                <div className="card-body" >
                  <h1>You have been logged out</h1>
                  <p>Return to <Link to="/" >Home Page</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default LogoutPage;