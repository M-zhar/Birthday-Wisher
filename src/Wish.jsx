import React from 'react';

const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
    <h1> HAPPY BIRTHDAY </h1>  <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
