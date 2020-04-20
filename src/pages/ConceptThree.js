import React from 'react';


import colour from '../images/concepts/three/colour.png';
import typeOne from '../images/concepts/three/typography.png';
import typeTwo from '../images/concepts/three/typography-two.png';
import logo from '../images/concepts/three/logo.png';
import icon from '../images/concepts/three/icon.png';
import iconTwo from '../images/concepts/three/icon-two.png';
import cards from '../images/concepts/three/biz-cards.png';
import site from '../images/concepts/three/site.png';
import letterhead from '../images/concepts/three/letterhead.png';


function ConceptThree() {
  return (
    <div className="concept-one">
      <h3>Concept Three</h3>
      <p>For the third concept I went with a much more classic feel, much inspiration came from luxury brands in London from the 1920’s. The black and white in this concept are slightly different, the white is a much more natural occurring white that can be found in nature, kind of like the natural colour of paper from the early 1900’s. The gold in this palette really sets the tone for high end, and then I went ahead and paired it with some deep contrasting colours that offer their own sense of richness. We are seeing green again to represent the connection to nature & money, growth, health, and generosity. A deep blue to represent stability, harmony, peace, calm and trust. I added in another colour, almond, to add some depth to the palette overall, much like the cream in palette 2 this represents dependability, conservative, flexible, neutral, calm, and relaxing.</p>
      <p>For the typography I went with the combination P22 Mackinac and Neue Haas Unica, this is a classic pairing to compliment the classic palette and layout. P22 mackinac is quite similar to Cooper light which was popluar in the 1970’s but this font brings a more contemporary vibe to the table. With a strong serif like p22 I wanted to have a contrasting secondary font that is easy to read and has many weights to choose from when designing layouts.</p>
      <p>This logo, using p22 Mackinac is classic with a customized Q, spacing and letter weights to remain unique. I wanted to keep to the inspiration of older luxury brands and go for the stacked centered lettering that dominated during that time. In previous concepts I went for more literal icons and in this concept I wanted to concentrate on the idea of growth for your business and the business’ that you work with.</p>
      <p>Take a look around and let me know what you think.</p>
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={logo} alt="logo exploration" />
      <img src={icon} alt="qube properties icon" />
      <img src={iconTwo} alt="qube properties icon" />
      <img src={cards} alt="business cards example" />
      <img src={site} alt="site preview" />
      <img src={letterhead} alt="letterhead preview" class="letter-head" />
    </div>
  );
}

export default ConceptThree;