import React from 'react';
import './styles/main.scss';
import Concepts from './pages/Concepts.js'

import Header from './components/Header.js'



function App() {
  return (
    <div>
      <Header />
      <main id="main" className="concepts-page">
        <Concepts />
      </main>
      <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101250406);</script>
      <script async src="//static.getclicky.com/js"></script>
      <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101250406ns.gif" /></p></noscript>
    </div>
  );
}

export default App;
