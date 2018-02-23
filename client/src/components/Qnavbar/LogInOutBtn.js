import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import { history } from "../../helpers/";
import { Button } from "react-bootstrap";
// import { NavItem } from "react-bootstrap";

// Redux
import { connect } from "react-redux";
import { logoutUser } from '../../actions/user.actions';

// const style = {
//   clear: "both",
//   position: "relative",
//   right: 10
// }

const style = {
  position: "absolute",
  top: "10px",
  right: "15px"
}

class LogInOutBtn extends Component {


  constructor(props) {
    super(props);

    this.state = {
      // logInButton: true,
      goToLogin: false,
      isSelected: false
    }

    this.handleClick = this.props.onClick;
  }


/* 
  handleClick(event) {
    console.log(`************************* Reached handleClick`);
    event.preventDefault();
    this.setState({isSelected: false});
    switch (event.target.name) {
      case ("logoutBtn"):
        this.props.dispatch(logoutUser);
        break;
      case ("loginBtn"):
        this.setState({goToLogin: true});
        history.push("/login");
        return;
      default:
        break;   
    }
  }  
*/

/* 
  componentWillMount() {
    if (history.location.pathname === "/login") {
      this.setState({goToLogin: true});
    } else {
      this.setState({goToLogin: false});
    }
  }
*/

  render () {

  /*     
    // console.log(history.location);
    let theButton = null;
    if (this.props.user.loggedIn) {
      theButton = (
        <p className="nav navbar-nav">
          <button name="logoutBtn" className="btn btn-info my-2 my-sm-0 navbar-btn" selected={this.state.isSelected} type="button" onClick={this.handleClick} >Log Out</button>
        </p>
      )
    } else {
      if (this.state.goToLogin) {
        theButton = (<p />);
      } else {
        theButton = (
          <p className="nav navbar-nav">
            <button name="loginBtn" className="btn btn-primary my-2 my-sm-0 navbar-btn" selected={this.state.isSelected} type="button" onClick={this.handleClick} >Log In</button>
          </p>
        );
      }
    }
    return (theButton)
  */
    const { btnType, btnVisible, btnDisabled } = this.props;
    let btnBsStyles = "";
    let btnClassNames = `my-2 my-sm-0 ${btnVisible ? "" : "d-none"}`
    btnBsStyles += btnType === "login" ? "primary" : "info";
    // btnBsStyles += " my-2 my-sm-0 navbar-btn";
    return (
        <Button className={btnClassNames} type="button" bsStyle={btnBsStyles} disabled={btnDisabled} style={style} onClick={this.props.onClick} >
          {btnType==="login" ? "Log In" : "Log Out"}
        </Button>
    )
  }
}


// Connect Redux

/* 
  const mapStateToProps = state => {
    return {
      user: state.user
    }
  }
  const logInOutBtnConnected = connect(
    mapStateToProps
  )(LogInOutBtn)

  export default logInOutBtnConnected;
*/

  
export default LogInOutBtn;
