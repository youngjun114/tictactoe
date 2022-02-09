import React from 'react';
import './app.css';

const App = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className='grid'>
      <div className='col' onClick={handleClick}>
        <span className='row' data-index={1}>
          1
        </span>
        <span className='row' data-index='2'>
          2
        </span>
        <span className='row' data-index='3'>
          3
        </span>
      </div>
      <div className='col' onClick={handleClick}>
        <span className='row'>4</span>
        <span className='row'>5</span>
        <span className='row'>6</span>
      </div>
      <div className='col' onClick={handleClick}>
        <span className='row'>7</span>
        <span className='row'>8</span>
        <span className='row'>9</span>
      </div>
    </div>
  );
};

export default App;
