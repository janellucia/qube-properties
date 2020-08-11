import React from 'react';

import personaOne from '../images/concepts/values/persona-michael.png';
import personaTwo from '../images/concepts/values/persona-sarah.png';
import personaThree from '../images/concepts/values/persona-david.png';
import principles from '../images/concepts/values/principles.png';
import positioning from '../images/concepts/values/statement.png';


function Values() {
  return (
    <div className="values">
      <h3>Brand Values</h3>
      <p>I always start the process with a kick-off meeting to get to know your values in your brand, from there, I conduct my research, crafting the brand values, positioning statement, and user profiles. Then, I'll develop a brand identity system that includes a logo, colour palette, a bold and flexible font pairing, assets for your social channels, and brand guidelines. This will help the design process stay informed throughout.</p>
      <img src={positioning} alt="brand statement" />
      <img src={principles} alt="brand design principles" />
      <img src={personaOne} alt="brand user persona Michael" />
      <img src={personaTwo} alt="brand user persona Sarah" />
      <img src={personaThree} alt="brand user persona David" />
    </div>
  );
}

export default Values;