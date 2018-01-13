import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from "react-redux";

// Style
const style = {
  height: 100 + "%",
}

class Login extends Component {
  // constructor (props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={style}>
        <div className="panel">
          <p className="panel-body">Welcome to the Login Page!</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    globalState: state
  }
}

const loginPageConnected = connect(
  mapStateToProps
)(Login);

export default loginPageConnected;
