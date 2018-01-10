import React, { Component } from 'react';
import backgroundImage from '../../../img/glenn-carstens-peters-190592.jpg';
import Nav from '../../Nav';
import JumbotronHome from './JumbotronHome';
import Footer from '../../Footer/Footer';
import Body from './Body';

const style = {
  height: 100 + "%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
}

class Home extends Component {

  render() {
    return (
      <div style={style}>
        <Nav />
        <JumbotronHome />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Home;
