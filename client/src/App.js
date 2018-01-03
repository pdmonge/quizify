import React, { Component } from 'react';
// import logo from './QuizifyLogoB.png';
// import backgroundPattern from './pattern.png';
import backgroundImage from './img/glenn-carstens-peters-190592a.png';
import './bootstrap.min.css';
import './App.css';
// import GCPphotoCredit from './components/GCPphotoCredit';
import JumbotronQ from './components/JumbotronQ'
import FooterQ from './components/FooterQ';

// const bgURL = './glenn-carstens-peters-190592.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronQ />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover"}}>
              <p></p>
            </div>
          </div>
        </div>
          {/* <div className="row">
            <div className="col-lg-12 page-footer">
              <p className="text-center">&copy; Copyright 2017 Redeye Solo</p>
              <GCPphotoCredit />
            </div>
          </div> */}
        <FooterQ />
      </div>
    );
  }
}

export default App;

/* 
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to Quiz-ify</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div>
 */

