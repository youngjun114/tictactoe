import React, { useState } from 'react';
import Square from '../square/square';
import styles from './board.module.css';

const Board = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));

  return (
    <div className={styles.board}>
      {board.map((item, index) => (
        <Square value={item} key={index} />
      ))}
    </div>
  );
};

export default Board;
