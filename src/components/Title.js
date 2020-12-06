import React, { Fragment } from 'react';

const Title = ({ logo, title, subtitle }) => {
  return (
    <Fragment>
      <div className='title__logo-box'>
        <img src={logo} alt='Logo' className='header__logo' />
      </div>
      <div className='title__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>{title}</span>
          <span className='heading-primary--sub'>{subtitle}</span>
        </h1>
      </div>
    </Fragment>
  );
};

export default Title;
