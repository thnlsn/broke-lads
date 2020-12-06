import React, { Fragment } from 'react';
import github from '../images/logo-github.svg';

const Footer = ({ silhouette, copyright }) => {
  return (
    <footer className='footer'>
      <img
        className='footer__skyline'
        src={silhouette}
        alt='Skyline Footer Art'
      />
      <div className='footer__contents'>
        <div className='spacer'> &nbsp; </div>
        <div className='footer__copyright'>&copy; {copyright}</div>
        <div className='footer__github'>
          <img className='footer__svg' src={github} alt='GitHub Link' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
