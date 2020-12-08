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
            <a href='https://www.instagram.com/'>
              <img className='social-link__logo' src={instagramLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='https://www.snapchat.com/'>
              <img className='social-link__logo' src={snapchatLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='https://www.tiktok.com/en/'>
              <img className='social-link__logo' src={tiktokLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='https://www.youtube.com/'>
              <img className='social-link__logo' src={youtubeLogo} alt='' />
            </a>
          </div>
          <div className='social-link'>
            <a href='https://www.twitch.tv/'>
              <img className='social-link__logo' src={twitchLogo} alt='' />
            </a>
          </div>
          <p className='social-text'>
            We post stuff regularly (well, we try too...)
          </p>

          <p className='social-text'>
            <p>
              Feel free to reach out for anything! (seriously... we're pretty
              lonely) Some reasons to do so might include:
            </p>

            <ul>
              <li>
                <span className='emphasis'>&bull;</span> Commisions for artwork
              </li>
              <li>
                <span className='emphasis'>&bull;</span> Tell us how much you
                like our stuff
              </li>
              <li>
                <span className='emphasis'>&bull;</span> Tell us how much you
                hate our stuff
              </li>
              <li>
                <span className='emphasis'>&bull;</span> You're lonely too
              </li>
            </ul>
          </p>

          <p className='social-text social-text--email'>
            If you'd like to contact us directly, you can message us on any
            social media or email directly at:{' '}
            <span className='emphasis'>brokelads@gmail.com</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Socials;
