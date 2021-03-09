import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components import statements
import NavBar from './navigation/nav';
import Footer from './footer/footer';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';
// TODO 
// bring in browserrouter and switch for all the pages 
// create contact page 
// create cart page 
// create page for products with cards 
// create api for bringing in products
// create login authorization for adding and deleting products
export default class App extends Component {
  render() {
    return (
      <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about-page' component={AboutPage} />
        </Switch>
        
        <Footer />
      </Router>
      </div>
        
    );
  }
}
