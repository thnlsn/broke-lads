import React, { Fragment } from 'react';
import './css/style.css';

// Logo image for the header
const headerLogo = '';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <header className='header'>
          <div className='title'>
            <div className='title__logo-box'>
              <img src={headerLogo} alt='Logo' className='header__logo' />
            </div>
            <div className='title__text-box'>
              <h1 className='heading-primary'>
                <span className='heading-primary--main'>Broke Lads</span>
                <span className='heading-primary--sub'>
                  "Savages with empty pockets"
                </span>
              </h1>
            </div>
          </div>
        </header>
        <main className='content'>
          <nav className='navigation'>Nav</nav>
          <div className='heading-secondary'>Who are we?</div>
        </main>
        <footer className='footer'>Footer</footer>
      </Fragment>
    </div>
  );
}

export default App;
