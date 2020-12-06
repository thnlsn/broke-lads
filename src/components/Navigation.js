import React, { Fragment } from 'react';

const Navigation = ({ func }) => {
  return (
    <Fragment>
      <nav className='navigation nav-text u-neg-margin-bottom-tiny'>
        <div className='navigation__tab'>
          <input
            type='radio'
            id='home-tab'
            name='tab-nav'
            value='home-tab'
            className='navigation__nav-radio'
            onChange={func}
            defaultChecked // "defaultChecked" and not "checked," otherwise it will check this tab inbetween every attempt to check
          />
          <label
            htmlFor='home-tab'
            className='navigation__tab-button u-unselectable'
          >
            Home
          </label>
        </div>
        <div className='navigation__tab'>
          <input
            type='radio'
            id='creator-tab'
            name='tab-nav'
            value='creator-tab'
            className='navigation__nav-radio'
            onChange={func}
          />
          <label
            htmlFor='creator-tab'
            className='navigation__tab-button u-unselectable'
          >
            Creators
          </label>
        </div>
        <div className='navigation__tab'>
          <input
            type='radio'
            id='follow-tab'
            name='tab-nav'
            value='follow-tab'
            className='navigation__nav-radio'
            onChange={func}
          />
          <label
            htmlFor='follow-tab'
            className='navigation__tab-button u-unselectable'
          >
            Follow Us!
          </label>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
