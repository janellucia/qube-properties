import React from 'react';

import icons from '../images/concepts/final/icons.png';
import logo from '../images/concepts/final/logo.png';
import logoAccent from '../images/concepts/final/logo-accent.png';


function Logos() {
  return (
    <div className="concept-one">
      <img src={icons} alt="qube properties icon" />
      <img src={logo} alt="logo exploration" />
      <img src={logoAccent} alt="qube properties icon" />
    </div>
  );
}

export default Logos;