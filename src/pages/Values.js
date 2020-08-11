import React from 'react';

import personaOne from '../images/concepts/values/persona-michael.png';
import personaTwo from '../images/concepts/values/persona-sarah.png';
import personaThree from '../images/concepts/values/persona-david.png';
import principles from '../images/concepts/values/principles.png';
import positioning from '../images/concepts/values/statement.png';


function Values() {
  return (
    <div className="values">
      <img src={positioning} alt="brand statement" />
      <img src={principles} alt="brand design principles" />
      <img src={personaOne} alt="brand user persona Michael" />
      <img src={personaTwo} alt="brand user persona Sarah" />
      <img src={personaThree} alt="brand user persona David" />
    </div>
  );
}

export default Values;