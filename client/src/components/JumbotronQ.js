import React from 'react';
import { Jumbotron } from './Jumbotron';
import backgroundPattern from '../img/pattern.png';
import logo from '../img/QuizifyLogoB.png';

const JumbotronQ = props => {
  return (
    <Jumbotron className="text-center" fluid style={{backgroundImage: `url(${backgroundPattern})`}}>
      <img src={logo} className="logo" alt="logo" height="300px"/>
      <h1 style={{display: "inline"}}>...The one-stop site for your test creation needs!</h1>
    </Jumbotron>
  )
}

export default JumbotronQ;