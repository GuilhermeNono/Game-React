import React from 'react';
import { canvas } from '../../context/canvas/helpers';
import Tile from './Tile';

function getCanvasMap() {

  let tileArray = [];

  for(let y = 0; y < canvas.length;y++) {
    const canvasY = canvas[y];

    for(let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = {x: x, y: y}
      const text = canvas[y][x] || canvasYX

      tileArray.push(<Tile position={position} text={text}/>)
    }
  }

  return tileArray;
}

const Debugger= () => {

  const tiles = getCanvasMap();

  return (
    <div>
      {tiles} 
    </div>
  );
}

export default Debugger;