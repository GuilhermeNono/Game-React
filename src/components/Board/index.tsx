import React from "react";
import { canvas, ECanvas } from "../../context/canvas/helpers";

import { GAME_SIZE } from "../../settings/constants";
import Chest from "../Chest";
import Demon from "../Demon";

import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Trap from "../Trap";

function getCanvasMap() {

  let tileArray = [];

  for(let y = 0; y < canvas.length;y++) {
    const canvasY = canvas[y];

    for(let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = {x: x, y: y}
      const text = canvas[y][x] || canvasYX

      const key = `${x}-${y}`;

      if(text === ECanvas.HERO) {
        tileArray.push(<Hero key={key} initialPosition={position}/>)
      }
      if(text === ECanvas.TRAP) {
        tileArray.push(<Trap key={key} initialPosition={position}/>)
      }
      if(text === ECanvas.MINI_DEMON) {
        tileArray.push(<MiniDemon key={key} initialPosition={position}/>)
      }
      if(text === ECanvas.DEMON) {
        tileArray.push(<Demon key={key} initialPosition={position}/>)
      }
      if(text === ECanvas.CHEST) {
        tileArray.push(<Chest key={key} initialPosition={position}/>)
      }
      
    }
  }

  return tileArray;
}

const elements = getCanvasMap();


const Board: React.FC = () => {

  return (
    <div>
      {/* <Trap />
      <Chest />
      <Demon />
      <MiniDemon initialPosition={{x: 5, y: 10}}/>
      <MiniDemon initialPosition={{x: 2, y: 9}}/>
      <Hero /> */}
      {elements}
      <img
        src="./assets/tileset.gif"
        alt=""
        width={GAME_SIZE}
        height={GAME_SIZE}
      />
    </div>
  );
};

export default Board;
