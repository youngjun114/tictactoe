import React, { useState } from 'react';
import Square from '../square/square';
import styles from './board.module.css';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    console.log(index);
  };

  return (
    <div className={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;
