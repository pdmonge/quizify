import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components and resources
import backgroundImage from './img/glenn-carstens-peters-190592.jpg';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import './bootstrap.min.css';
import './App.css';

const style = {
  height: 100 + "%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
}

const App = () => {
  
  return (
    <Router>
      <div style={style}>
        <Nav />
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;