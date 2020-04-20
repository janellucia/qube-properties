import React from 'react';


import colour from '../images/concepts/two/colour.png';
import typeOne from '../images/concepts/two/typography.png';
import typeTwo from '../images/concepts/two/typography-two.png';
import logo from '../images/concepts/two/logo.png';
import icon from '../images/concepts/two/icon.png';
import iconTwo from '../images/concepts/two/icon-two.png';
import cards from '../images/concepts/two/biz-cards.png';
import site from '../images/concepts/two/site.png';
import letterhead from '../images/concepts/two/letterhead.png';


function ConceptOne() {
  return (
    <div className="concept-one">
      <h3>Concept Two</h3>
      <p>For the second concept I went with a much more geometric feel, very clean and easy to look at and identify. Similar to the first concept I wanted to make the main colours black and white and concentrate on contrast with the supporting colours. This palette is much warmer than concept one and the colours hold different meanings, green is highly connected to nature & money, growth, health, and generosity. Burnt Umber from the orange family represents creativity, adventure, enthusiasm, success, and balance. Yosemite Trailhead, a creamy colour is dependable, conservative, flexible, neutral, calm, and relaxing. </p>
      <p>For the typography I went with the combination Gotham and Freight, this combination was chosen for it’s bold lettering made for easy reading that will ultimately make your signs stand out. Gotham may at first glance appear to be similar to Soleil used in concept one however it is slightly taller and slimmer, Gotham was inspired by architectural lettering from mid-century New York City. This font has been used to make signs stand out for years, an example of this is Obama’s 2008 campaign, it was clear, easy to read and identify.</p>
      <p>For this logo, I went with tighter letter spacing and I was trying to go for a compact and geometric feel that is easy on the eyes. I created a few icons to look at, the main one with the stars has three options of the same icon, the first which is 2 cubes, one rotated at 45 degrees felt more on brand since Qube sounds exactly like cube. </p>
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

export default ConceptOne;