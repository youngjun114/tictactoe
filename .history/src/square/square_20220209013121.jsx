import React from 'react';
import './square.css';

const Square = ({ key }) => {
  return <div className='square'>{console.log(key)}</div>;
};

export default Square;
