import React from 'react';


import colour from '../images/concepts/one/colour.png';
import typeOne from '../images/concepts/one/typography.png';
import typeTwo from '../images/concepts/one/typography-two.png';
import logo from '../images/concepts/one/logo.png';
import icon from '../images/concepts/one/icon.png';
import iconTwo from '../images/concepts/one/icon-two.png';
import cards from '../images/concepts/one/biz-cards.png';
import site from '../images/concepts/one/site.png';
import letterhead from '../images/concepts/one/letterhead.png';


function ConceptOne() {
  return (
    <div className="concept-one">
      <h3>Concept One</h3>
      <p>For the first concept I concentrated on taking classic elements and giving them a minimal, ultra-contemporary feel. The vibe I'm going for is very clean, cool, confident & present. For the colour scheme I wanted to make the main colours black and white, with the right accent colours to grab a user’s attention. Ultramarine is a brilliant deep blue pigment originally obtained from lapis lazuli and it represents luxury and brilliance, I added Candy apple red because I love how red compliments blue , the combination is so cool and light, red can capture attention very easily and its associated with excitement and passion. The second blue was added to round off the palette, I wanted blue as the main colour because blue represents stability, harmony, peace, calm and trust and I felt that holds true to the brand values defined before.</p>
      <p>For the typography I went with the combination Soleil and Coranto 2, when choosing type I wanted to find a combination that complimented each other, had a very ideal Q and B and was easy to read but was unique enough to stand out. The logo is very clean, strong and confident, I used Soleil Bold and gave the characters custom spacing and altered the U and E in the logo for better balance and flow. I created a few icons to look at, the main one with the building is good for your social media profile images and also good to maybe put in the bottom right corner of images when marketing spaces or services. </p>
      <p>I also added a look into business cards, a site and a letterhead and these are just examples of the logo, colour and typography could look and feel in your branding, we will concentrate on those products in the next phase, Here we are just looking at Colour, Typography & Logo. I know we’re not doing a site but I thought I would define where type lives for you when defining the style guide. The text on the site example is just copy used in the design community because it shows a good variety of characters so you can get a rgood idea what the text will look. </p>
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