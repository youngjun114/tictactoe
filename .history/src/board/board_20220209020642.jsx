import React, { useState } from 'react';
import Square from '../square/square';
import styles from './board.module.css';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  console.log(board);
  const handleClick = (index) => {
    if (board[index] == null) return;
    const value = isX ? 'X' : 'O';
    setIsX(!isX);
    const newBoard = [...board];
    newBoard[index] = value;
    console.log(board);
    setBoard(...newBoard);
  };

  return (
    <div className={styles.board}>
      {board.map((value, index) => (
        <Square key={index} value={value} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Board;
