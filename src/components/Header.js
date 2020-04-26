import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Menu from "./Menu";

const Header = ({ siteTitle }) => (
  <Router>
    <header>
      <a href="#main" className="hidden">Skip to Main</a>
      <a href="#footer" className="hidden">Skip to Footer</a>
      <div className="wrapper">
        <img src={logo} alt="" className="logo" />
        <nav className="concept-link-wrap">
          <Link to="/concepts/values" className="concept-links">Values</Link>
          <Link to="/concepts/concept-one" className="concept-links">Concept One</Link>
          <Link to="/concepts/concept-two" className="concept-links">Concept Two</Link>
          <Link to="/concepts/concept-three" className="concept-links">Concept Three</Link>
        </nav>
        <div className="mobile-menu">
          <Menu pageWrapId={"main"} outerContainerId={"Root"} />
        </div>
      </div>
    </header>
  </Router>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
