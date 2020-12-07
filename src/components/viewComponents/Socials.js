import React, { Fragment } from 'react';

import TikTokLogo from '../../images/logo-tiktok.svg';
import sprite from '../../images/sprite.svg';

const Socials = () => {
  return (
    <Fragment>
      <div className='socials'>
        <div className='heading-secondary u-margin-bottom-medium'>
          Follow Us <span className='emphasis'>!</span>
        </div>
        <p className='paragraph paragraph--lined'>
          <div className='emphasis'>Insta:</div> ---
          <div className='emphasis'>Spanchat:</div> ---
          <div className='emphasis'>
            <svg class='social-logo'>
              <use
                xlinkHref={`${sprite}#icon-logo-github`}
                aria-hidden='true'
              ></use>
            </svg>
          </div>
          ---
          <div className='emphasis'>YouTube:</div> ---
          <div className='emphasis'>Twitch:</div> ---
        </p>
      </div>
    </Fragment>
  );
};

export default Socials;
