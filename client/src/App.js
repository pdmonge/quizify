import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import { history } from './helpers/';

// Components and resources
import backgroundImage from './img/glenn-carstens-peters-190592.jpg';
// import Qnavbar from './components/Qnavbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import { LoginPage } from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard/Dashboard';
import { LogoutPage } from './components/pages/LogoutPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
import './App.css';

const style = {
  height: 100 + "%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
}

const App = () => {
  
  return (
    <Router history={history}>
      <div style={style}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/logout" component={LogoutPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;