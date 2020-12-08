import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/style.css';

// PAGES
import Homepage from './components/Homepage';
import TheVoid from './components/pages/TheVoid';
import PaperSketch from './components/pages/PaperSketch';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Homepage></Homepage>,
  },
  {
    path: '/thevoid',
    exact: true,
    main: () => <TheVoid></TheVoid>,
  },
  {
    path: '/papersketch',
    exact: true,
    main: () => <PaperSketch></PaperSketch>,
  },
];

function App() {
  return (
    <div className='App'>
      <Router>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Router>
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

/*

<Quote quote={'"These dudes are HILARIOUS!" - Clark Kent'} />
<Quote quote={'"Their work just feels so genuine." - Bruce Wayne'} />
<Quote quote={'"I love their variety of humour" - Diana Prince'} />
          
*/
