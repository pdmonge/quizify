import React from "react";
import Icon from './QuizifyIconB.png';
import { Link } from "react-router-dom";

const style = {
  image: {
    height: 40 + "px"
  },
  brand: {
    fontWeight: "bold"  
  },
  loginButton: {
    clear: "both",
    position: "relative",
    right: 10
  }
}

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand" style={style.brand}>
        <img alt="Brand" src={Icon} style={style.image}/>
        Quizify
      </Link>

        <p className="nav navbar-nav">
          <button className="btn btn-primary my-2 my-sm-0 navbar-btn" type="button">Log In</button>
        </p>
    </nav>
  )
};

/* 
  <nav classNameName="navbar navbar-inverse navbar-top">
    <div classNameName="container-fluid">
      <div classNameName="navbar-header">
        <button type="button" classNameName="collapsed navbar-toggle">
          <span classNameName="sr-only">Toggle navigation</span>
          <span classNameName="icon-bar" /> <span classNameName="icon-bar" />
          <span classNameName="icon-bar" />
        </button>
        <a href="/" classNameName="navbar-brand">
          React Reading List
        </a>
      </div>
    </div>
  </nav>;
 */

export default Nav;
