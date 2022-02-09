import React from 'react';
import styles from './square.module.css';

const Square = ({ value, index, handleClick }) => {
  return (
    <button className={styles.square} onClick={handleClick(index)}>
      {value ? value : ''}
    </button>
  );
};

export default Square;
