import React from 'react';
import { CanvasContext } from '../../context/canvas';
import Tile from './Tile';

function getCanvasMap(canvas) {

  let tileArray = [];

  for(let y = 0; y < canvas.length;y++) {
    const canvasY = canvas[y];

    for(let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = {x: x, y: y}
      const text = canvas[y][x] || canvasYX

      const key = `${x}-${y}`;

      tileArray.push(<Tile key={key} position={position} text={text}/>)
    }
  }

  return tileArray;
}

const Debugger= () => {
  const canvasContext = React.useContext(CanvasContext);
  const tiles = getCanvasMap(canvasContext.canvas);

  return (
    <div>
      {tiles} 
    </div>
  );
}

export default Debugger;