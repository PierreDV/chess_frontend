import React from 'react';
import Square from './square';

const Board = () => {
  return(
    <table>
      <tbody>
        <tr>
          <Square />
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
