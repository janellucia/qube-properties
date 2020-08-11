import React from 'react';


import cards from '../images/concepts/final/biz-cards.png';
import site from '../images/concepts/final/site.png';
import letterhead from '../images/concepts/final/letterhead.png';


function Moodboard() {
  return (
    <div className="concept-one">
      <img src={cards} alt="business cards example" />
      <img src={letterhead} alt="letterhead preview" class="letter-head" />
      <img src={site} alt="site preview" />
    </div>
  );
}

export default Moodboard;