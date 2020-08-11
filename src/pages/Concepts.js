import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import { slide as Menu } from "react-burger-menu";

import Values from './Values.js'
import Moodboard from './Moodboard.js'
import Logos from './Logos.js'
import Misc from './Misc.js'


import logo from '../images/logo.png';
import Menu from "../components/Menu";





function Concepts() {
  return (
    <Router>
      <header>
        <a href="#main" className="hidden">Skip to Main</a>
        <a href="#footer" className="hidden">Skip to Footer</a>
        <div className="wrapper">
          <img src={logo} alt="" className="logo" />
          <nav className="concept-link-wrap">
            <Link to="/values" className="concept-links">Values</Link>
            <Link to="/moodboard" className="concept-links">Colour & Typography</Link>
            <Link to="/logos" className="concept-links">Logos</Link>
            <Link to="/misc" className="concept-links">Misc</Link>
          </nav>
          <div className="mobile-menu">
            <Menu pageWrapId={"main"} outerContainerId={"Root"} />
          </div>
        </div>
      </header>
      <div className="wrapper">
        <Switch>
          <Route path="/values" exact component={Values} />
          <Route path="/moodboard" exact component={Moodboard} />
          <Route path="/logos" exact component={Logos} />
          <Route path="/misc" exact component={Misc} />

        </Switch>
        {/* <Redirect exact from="/" to="/values" /> */}
      </div>
    </Router>
  );
}

export default Concepts;