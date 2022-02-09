import React, { useState } from 'react';
import Square from '../square/square';
import styles from './board.module.css';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className={styles.board}>
      {board.map((value, index) => (
        <Square value={value} index={index} />
      ))}
    </div>
  );
};

export default Board;
