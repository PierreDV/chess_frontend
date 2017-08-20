import React from 'react';
import Square from './square';

const Board = () => {
  let boardLength = 8;
  let rows = [];
  for (let i=0; i < boardLength; i++) {
    let squares = [];
    for (let i=0; i < boardLength; i++) {
      squares.push(<Square />);
    }
    rows.push(<tr>{squares}</tr>)
  }
  return(
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
};

export default Board;
