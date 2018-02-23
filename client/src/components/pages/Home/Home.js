import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Qnavbar from '../../Qnavbar';
import JumbotronHome from './JumbotronHome';
import Body from './Body';

// Redux
import { connect } from "react-redux";

// Style
const style = {
  height: 100 + "%",
}

class Home extends Component {
  // constructor (props) {
  //   super(props);
  // }

  render() {
    // console.log(`*******************************  Home props: ${JSON.stringify(this.props, null, 2)}`);
    if (!this.props.user.loggedIn) {
      return (
        <div style={style}>
          <Qnavbar page="home" />
          <JumbotronHome />
          <Body />
        </div>
      )
    } else {
        return(<Redirect to="/dashboard" />);
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const homePageConnected = connect(
  mapStateToProps
)(Home);

export default homePageConnected;
