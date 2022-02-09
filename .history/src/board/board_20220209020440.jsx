import React, { useState } from 'react';
import Square from '../square/square';
import styles from './board.module.css';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    if (board[index] == null) return;
    const value = isX ? 'X' : 'O';
    setIsX(!isX);
    const newBoard = [...board];
    newBoard[index] = value;
    setBoard(...newBoard);
  };

  return (
    <div className={styles.board}>
      {board.map((value, index) => (
        <Square value={value} index={index} />
      ))}
    </div>
  );
};

export default Board;
