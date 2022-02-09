import React from 'react';
import './square.css';

const Square = (props) => {
  return <div className='square'>{console.log(props.value)}</div>;
};

export default Square;
