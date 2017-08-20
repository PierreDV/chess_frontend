import React from 'react';
import Piece from './piece';

const STARTING_SQUARE_MAP = {
  "a1":"+R",
  "b1":"+N",
  "c1":"+B",
  "d1":"+Q",
  "e1": "+K",
  "f1": "+B",
  "g1": "+N",
  "h1": "+R",
  "a2": "+P",
  "b2": "+P",
  "c2": "+P",
  "d2": "+P",
  "e2": "+P",
  "f2": "+P",
  "g2": "+P",
  "h2": "+P",
  "a8":"-R",
  "b8":"-N",
  "c8":"-B",
  "d8":"-Q",
  "e8": "-K",
  "f8": "-B",
  "g8": "-N",
  "h8": "-R",
  "a7": "-P",
  "b7": "-P",
  "c7": "-P",
  "d7": "-P",
  "e7": "-P",
  "f7": "-P",
  "g7": "-P",
  "h7": "-P",
}

const Square = (props) => {
  let piece = [];
  if (props.coordinates in STARTING_SQUARE_MAP) {
    piece.push(<Piece unicode_value={STARTING_SQUARE_MAP[props.coordinates]} />)
  }
  return(
    <td>
      {piece}
    </td>
  )
};

export default Square;
