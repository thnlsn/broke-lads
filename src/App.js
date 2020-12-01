import React, { Fragment } from 'react';
import './css/style.css';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <header className='header'>
          Header
          <nav className='navigation'>Nav</nav>
        </header>
        <main className='content'>Content</main>
        <footer className='footer'>Footer</footer>
      </Fragment>
    </div>
  );
}

export default App;
