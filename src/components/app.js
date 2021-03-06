import React, {Component} from 'react';

// components import statements
import NavBar from './navigation/nav';
import Footer from './footer/footer';
import HomePage from './pages/homepage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
