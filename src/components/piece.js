import React from 'react';

const PIECE_UNICODE = {
  "+K": "\u2654",
  "+Q": "\u2655",
  "+R": "\u2656",
  "+B": "\u2657",
  "+N": "\u2658",
  "+P": "\u2659",
  "-K": "\u265A",
  "-Q": "\u265B",
  "-R": "\u265C",
  "-B": "\u265D",
  "-N": "\u265E",
  "-P": "\u265F",
}

const Piece = (props) => {
  return(
    <div>{PIECE_UNICODE[props.unicode_value]}</div>
  )
};

export default Piece;
