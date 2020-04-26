import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import menu from '../images/menu-icon.png';

export default props => {
  return (
    <Router>
      <Menu right disableAutoFocus customBurgerIcon={(<img src={menu} alt="colour" />)} className="menu-icon" >
        <a href="/concepts/values" className="concept-links">Values</a>
        <a href="/concepts/concept-one" className="concept-links">Concept One</a>
        <a href="/concepts/concept-two" className="concept-links">Concept Two</a>
        <a href="/concepts/concept-three" className="concept-links">Concept Three</a>
      </Menu>
    </Router>
  );
};