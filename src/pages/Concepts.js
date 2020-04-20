import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'

import logo from '../images/logo.png';


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <header>
          <div className="wrapper">
            <img src={logo} alt="" className="logo" />
            <div className="concept-link-wrap">
              <Link to="/concepts/values" className="concept-links">Values</Link>
              <Link to="/concepts/concept-one" className="concept-links">Concept One</Link>
              <Link to="/concepts/concept-two" className="concept-links">Concept Two</Link>
              <Link to="/concepts/concept-three" className="concept-links">Concept Three</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <div className="intro">
            <h1>Qube Properties Branding <br></br>Phase One: Colours, Typography & Logo</h1>
            <h2>In this phase we are looking exculsively at colours, typography and the logo. <br></br>All other elements shown are for you to see an example of how each concept could look action.</h2>
            <div className="credits">
              <p>Qube Properties Branding</p>
              <p>April 2020</p>
            </div>
          </div>
          <Switch>
            <Route path="/concepts/Values" exact component={Values} />
            <Route path="/concepts/concept-one" component={ConceptOne} />
            <Route path="/concepts/concept-two" component={ConceptTwo} />
            <Route path="/concepts/concept-three" component={ConceptThree} />
          </Switch>
          <Redirect exact from="/" to="/concepts/Values" />
        </div>
      </main>
    </Router>
  );
}

export default Concepts;