import React, { useState } from 'react';
import Square from '../square/square';
import './board.css';

const Board = () => {
  const [board, setBoard] = useState(new Array(9).fill(<Square />));

  return (
    <div className='board'>
      {board.forEach((square) => console.log(square))}
    </div>
  );
};

export default Board;
