import React, { Fragment, useState } from 'react';
import './css/style.css';

// COMPONENTS
import Title from './components/Title';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Quote from './components/Quote';

import Home from './components/viewComponents/About';

// SVGs
import skyline from './images/skyline.svg';

// Logo image for the header
import headerLogo from './images/main-logo.svg';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <header className='header'>
          <Title
            logo={'headerLogo'}
            title={'Broke Lads'}
            subtitle={'"Savages with empty pockets"'}
          />
        </header>
        <Navigation />
        <main className='content'>
          <Home />
        </main>
        <div className='quotes'>
          <Quote quote={'"These dudes are hilarous!" - Clark Kent'} />
          <Quote quote={'"Their work just feels so genuine." - Bruce Wayne'} />
          <Quote quote={'"I love the variety of humour." - Diana Prince'} />
        </div>
        <Footer
          silhouette={skyline}
          copyright={'2020 by Broke Lads. All rights reserved.'}
        />
      </Fragment>
    </div>
  );
}

export default App;

/* 

// Notes of things I've learned while coding this page

// Notes
Use em as a more responsive and future proof way of increasing or decreasing sizes for things that are dependant on the parent, like subtitles or emphasis classes on fonts

// Make Notecards
* in JavaScript or React
Why not use ++ or -- on a state value? Even if it's inside setState();
Declare
promise
async await
non-zero index
eslint error on the empty array of useEffect
Destructuring

*/
