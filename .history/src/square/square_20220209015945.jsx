import React from 'react';
import styles from './square.module.css';

const Square = ({ value, handleClick }) => {
  return <div className={styles.square}>{value}</div>;
};

export default Square;
