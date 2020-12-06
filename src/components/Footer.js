import React, { Fragment } from 'react';

const Footer = ({ silhouette, copyright }) => {
  return (
    <footer className='footer'>
      <img
        className='footer__skyline'
        src={silhouette}
        alt='Skyline Footer Art'
      />
      <div className='footer__copyright'>&copy; {copyright}</div>
    </footer>
  );
};

export default Footer;
