import React, { useState } from 'react';
import Square from '../square/square';

const Board = () => {
  const [board, setBoard] = useState([
    ...new Array(3).fill(...new Array(3).fill(null)),
  ]);

  return (
    <div className='board'>
      {board.map((item, index) => {
        return <Square index={index} />;
      })}
    </div>
  );
};

export default Board;
