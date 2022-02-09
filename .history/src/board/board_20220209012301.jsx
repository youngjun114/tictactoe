import React, { useState } from 'react';

const Board = () => {
  const [board, setBoard] = useState([
    ...new Array(3).fill(...new Array(3).fill(null)),
  ]);

  return (
    <div className='board'>
      {board.map((item, index) => console.log(index))}
    </div>
  );
};

export default Board;
