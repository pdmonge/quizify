import React, { Component } from "react";
import Icon from './QuizifyIconB.png';
import LoginOutBtn from './LogInOutBtn';
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
// import { logoutUser } from '../../actions/user.actions';

const style = {
  image: {
    height: 40 + "px"
  },
  brand: {
    fontWeight: "bold"  
  }
}

class Nav extends Component {
  render () {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand" style={style.brand}>
          <img alt="Brand" src={Icon} style={style.image}/>
          Quizify
        </Link>
        <LoginOutBtn />
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const navConnected = connect(
  mapStateToProps
)(Nav)

export default navConnected;
