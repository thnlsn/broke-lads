import React, { Fragment } from 'react';
import './css/style.css';

// Logo image for the header
const headerLogo = '';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <header className='header'>
          <div className='header__logo-box'>
            <img src={headerLogo} alt='Logo' className='header__logo' />
          </div>
          <h1 className='heading-primary'>
            {/*             <span className='heading-primary--main'>Broke Lads</span>
            <span className='heading-primary--sub'>
              "Savages with empty pockets"
            </span> */}
          </h1>
        </header>
        <main className='content'>
          <nav className='navigation'>Nav</nav>
          Content
        </main>
        <footer className='footer'>Footer</footer>
      </Fragment>
    </div>
  );
}

export default App;
