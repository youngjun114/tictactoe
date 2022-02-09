import React from 'react';
import styles from './square.module.css';

const Square = ({ value, handleClick, key }) => {
  return (
    <div className={styles.square} onClick={() => handleClick(key)}>
      {value ? value : ''}
    </div>
  );
};

export default Square;
