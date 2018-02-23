import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Qnavbar from '../../Qnavbar';
import { Button, Grid, Row, Col,
  Form, FormGroup, ControlLabel,
  FormControl, HelpBlock } from "react-bootstrap";


// import { userActions } from '../_actions';

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

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {
      name,
      value
    } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submitted: true
    });
    const {
      username,
      password
    } = this.state;
    // const { dispatch } = this.props;
    // if (username && password) {
    //     dispatch(userActions.login(username, password));
    // }
  }
  // <div className="container-fluid" style={style.container} >

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div>
        <Qnavbar page="login" />
        <Grid fluid={true} style={style.container} >
          <Row className="show-grid justify-content-center" style={style.row} >
            <Col lg={6} md={8} xs={12} >
              <div className="card mb-3" style={style.card} >
                <h3 className="card-header" >Login</h3>
                <div className="card-body" >
                  <Form name="form" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" className={submitted && !username ? 'has-error' : ''}>
                      <ControlLabel >Username</ControlLabel>
                      <FormControl type="text" placeholder="Enter Email" value={username} onChange={this.handleChange} />
                      {submitted && !username &&
                          <HelpBlock >Username is required</HelpBlock>
                      }
                    </FormGroup>
                    <FormGroup controlId="password" className={submitted && !password ? ' has-error' : ''}>
                      <ControlLabel >Password</ControlLabel>
                      <FormControl type="password" value={password} onChange={this.handleChange} />
                      {submitted && !password &&
                          <HelpBlock >Password is required</HelpBlock>
                      }
                    </FormGroup>
                    <FormGroup >
                      <Button bsStyle="primary" >Login</Button>
                      {loggingIn &&
                          <img alt="Logging In" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                      }
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

function mapStateToProps(state) {
    // const { loggingIn } = state.authentication;
    // return {
    //     loggingIn
    // };
    return {
      globalState: state
    }
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 