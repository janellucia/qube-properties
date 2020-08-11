import React from 'react';


import colour from '../images/concepts/final/colours.png';
import typeOne from '../images/concepts/final/type.png';
import typeTwo from '../images/concepts/final/type-two.png';


function Moodboard() {
  return (
    <div className="concept-one">
      <h3>Moodboard</h3>
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
    </div>
  );
}

export default Moodboard;