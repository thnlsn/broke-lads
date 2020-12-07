import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/style.css';

// COMPONENTS
import Title from './components/Title';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Quote from './components/Quote';

import Home from './components/viewComponents/About';
import Creators from './components/viewComponents/Creators';
import Socials from './components/viewComponents/Socials';

// SVGs
import skyline from './images/skyline.svg';
import github from './images/logo-github.svg';

// Logo image for the header
import headerLogo from './images/main-logo.svg';

function App() {
  const [tabState, setTabState] = useState('home-tab');

  const changeTab = (event) => {
    // Passing in the value of the value attribute attached to the radio input element of the tab
    setTabState(event.target.value);
  };

  const renderTab = () => {
    // Depending on what tabState currently is, display the corresponding component
    switch (tabState) {
      case 'home-tab':
        return <Home />;
      case 'creator-tab':
        return <Creators />;
      case 'follow-tab':
        return <Socials />;
    }
  };

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
        <Navigation func={changeTab} />
        <main className='content'>{renderTab()}</main>
        <div className='quotes'>
          {/*           <Quote quote={'"These dudes are HILARIOUS!" - Clark Kent'} />
          <Quote quote={'"Their work just feels so genuine." - Bruce Wayne'} />
          <Quote quote={'"I love their variety of humour" - Diana Prince'} /> */}
          <Quote
            quote={'"Everything they put out is peak entertainment."'}
            person={'Someone that DEFINITELY exists'}
          />
          <Quote
            quote={'"Eisner award worthy - truly something to behold."'}
            person={'An important person once said this about something'}
          />
          <Quote
            quote={'"How can you not love these guys?"'}
            person={'One of our moms'}
          />
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
target='_blank'

*/
