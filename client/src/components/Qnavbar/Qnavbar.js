import React, { Component } from "react";
import Icon from './QuizifyIconB.png';
import LoginOutBtn from './LogInOutBtn';
// import { Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { history } from "../../helpers"

// Redux
import { connect } from "react-redux";
import { logoutUser } from '../../actions/user.actions';

const style = {
  brand: {
    fontWeight: "bold",
    color: "white"
  },
    image: {
    height: 40 + "px"
  },
  navbar: {
    backgroundColor: "rgba(50,50,50,0.5)",
    padding: "10px"
  }
}

class Qnavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnDisabled: false,
      btnVisible: true,
      btnType: "login" // Valid values are "login" or "logout"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // event.preventDefault();
    switch (this.state.btnType) {
      case ("logout"):
        console.log("************************************");
        console.log("Qnavbar-- Reached handleClick logout");
        console.log("************************************");
        this.props.dispatch(logoutUser);
        history.push("/logout");
        this.setState({btnType: "login"});
        break;
      case ("login"):
        history.push("/login");
        this.setState({btnDisabled: true, btnVisible: false});
        break;
      default:
        break;   
    }
  }  

  render () {
    
    const { page, dispatch, user } = this.props;

    // this.state.btnType must be either "login" or "logout"
    if (page==="login") {
      this.state.btnDisabled = true;
      this.state.btnVisible = false;
    } else if (user.loggedIn) {
      this.state.btnType = "logout";
    }
    
    return (
      <Navbar bsClass="light" fixedTop fluid style={style.navbar} >
        <Navbar.Header>
          <Navbar.Brand >
            <Link to="/" >
              <img alt="Brand" src={Icon} style={style.image}/>
              <span style={style.brand} >Quizify</span>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <LoginOutBtn btnType={this.state.btnType} btnVisible={this.state.btnVisible} btnDisabled={this.state.btnDisabled} onClick={this.handleClick} />
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const QnavbarConnected = connect(
  mapStateToProps
)(Qnavbar)

export default QnavbarConnected;