import React from 'react';
import Square from './square';

const Board = () => {
  let boardLength = 8;
  let rows = [];
  let columns = ["a","b","c","d","e","f","g","h"]

  for (let i=0; i < boardLength; i++) {
    let squares = [];
    let row = i
    for (let i=0; i < boardLength; i++) {
      squares.push(<Square coordinates={`${columns[i]}${boardLength - row}`}/>);
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
