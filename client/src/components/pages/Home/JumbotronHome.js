import React from 'react';
import backgroundPattern from '../../../img/pattern.png';
import logo from '../../../img/QuizifyLogoB.png';
import { Row } from '../../Grid/';

const style = {
  jumbotron: {
    backgroundImage: `url(${backgroundPattern})`,
    padding: 1 + "%",
    opacity: 0.95
  },
  text: {
    paddingTop: 8 + "%"
  }
}

const JumbotronHome = props => {
  return (
    <div className="jumbotron text-center" style={style.jumbotron}>
      <Row className="clearfix" fluid>
        <img src={logo} className="logo" alt="logo" height="180px"/>
        <h1>
          <p>
          the one-stop site for test creation
          </p>
        </h1>
      </Row>
    </div>
  )
}

export default JumbotronHome;