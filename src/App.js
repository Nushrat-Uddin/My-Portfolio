
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Switch>
          <Route path="/about">
          <About></About> 
          </Route>
          <Route path="/blogs">
          <Blogs></Blogs>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <Route path="/portfolio">
          <Portfolio></Portfolio>
          </Route>
          <Route path="/home">
            <Home></Home>
            </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
