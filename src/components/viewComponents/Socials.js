import React, { Fragment } from 'react';

import instagramLogo from '../../images/logo-instagram.svg';
import snapchatLogo from '../../images/logo-snapchat.svg';
import tiktokLogo from '../../images/logo-tiktok.svg';
import youtubeLogo from '../../images/logo-youtube.svg';
import twitchLogo from '../../images/logo-twitch.svg';

const Socials = () => {
  return (
    <Fragment>
      <div className='socials'>
        <div className='heading-secondary u-margin-bottom-medium'>
          Follow Us <span className='emphasis'>!</span>
        </div>
        <div className='paragraph paragraph--lined social-container'>
          <div className='social-link'>
            <a href='#'>
              <img className='social-link__logo' src={instagramLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='#'>
              <img className='social-link__logo' src={snapchatLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='#'>
              <img className='social-link__logo' src={tiktokLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='#'>
              <img className='social-link__logo' src={youtubeLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='#'>
              <img className='social-link__logo' src={twitchLogo} alt='' />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Socials;
