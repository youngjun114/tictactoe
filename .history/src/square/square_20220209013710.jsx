import React from 'react';
import styles from './square.module.css';

const Square = (props) => {
  return <div className={styles.square}>{props.item}</div>;
};

export default Square;
