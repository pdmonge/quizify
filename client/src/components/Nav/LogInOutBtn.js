import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import { history } from "../../helpers/";

// Redux
import { connect } from "react-redux";
import { logoutUser } from '../../actions/user.actions';

// const style = {
//   clear: "both",
//   position: "relative",
//   right: 10
// }

class LogInOutBtn extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(event) {
    event.preventDefault();
    console.log(`************************* Reached handleLogoutClick`);
    this.props.dispatch(logoutUser);
  }  

  render () {
    if (this.props.user.loggedIn) {
      return (
        <p className="nav navbar-nav">
          <button className="btn btn-info my-2 my-sm-0 navbar-btn" type="button" onClick={this.handleLogoutClick} >Log Out</button>
        </p>
      )
    } else {
      return (
        <p className="nav navbar-nav">
          <Link to="/login" >
            <button className="btn btn-primary my-2 my-sm-0 navbar-btn" type="button" >Log In</button>
          </Link>
        </p>
      )
    }
  }
}

// Connect Redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const logInOutBtnConnected = connect(
  mapStateToProps
)(LogInOutBtn)

export default logInOutBtnConnected;
