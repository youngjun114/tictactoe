import React, { useState } from 'react';
import Square from '../square/square';
import './board.css';

const Board = () => {
  const [board, setBoard] = useState(new Array(9).fill(<Square />));
  console.log(board);
  return (
    <div className='board'>
      {board.map((item, index) => (
        <Square key={index} />
      ))}
    </div>
  );
};

export default Board;
