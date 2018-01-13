import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from "react-redux";

// Style
const style = {
  height: 100 + "%",
}

class Dashboard extends Component {
  // constructor (props) {
  //   super(props);
  // }

  render() {
    if (this.props.globalState.user.loggedIn) {
      return (
        <div style={style}>
          <div className="panel">
            <p className="panel-body">Welcome to your dashboard!</p>
          </div>
        </div>
      )
    } else {
      return (<Redirect to="/" />)
    }
  }
}

const mapStateToProps = state => {
  return {
    globalState: state
  }
}

const dashboardPageConnected = connect(
  mapStateToProps
)(Dashboard);

export default dashboardPageConnected;
