import React from 'react';

const Quote = ({ quote, person }) => {
  return (
    <div className='quote'>
      {quote} <span className='quote--person'>- {person}</span>
    </div>
  );
};

export default Quote;
