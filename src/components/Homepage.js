import React, { Fragment, useState } from 'react';

// COMPONENTS
import Title from './Title';
import Navigation from './Navigation';
import Footer from './Footer';
import Quote from './Quote';

import Home from './viewComponents/About';
import Creators from './viewComponents/Creators';
import Socials from './viewComponents/Socials';

// SVGs
import skyline from '../images/skyline.svg';

// Logo image for the header
import headerLogo from '../images/main-logo.svg';

const Homepage = () => {
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
    <div className='landing-page'>
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
        <Quote
          quote={'"Everything they put out is peak entertainment."'}
          person={'Someone that DEFINITELY exists'}
        />
        <Quote
          quote={'"Eisner award worthy - truly something to behold."'}
          person={'Someone probably said this about something'}
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
    </div>
  );
};

export default Homepage;
