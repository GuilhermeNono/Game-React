import React from "react";
import "./style.css";

import { TILE_SIZE } from "../../settings/constants";

interface IProps {
  initialPosition: {x:number; y:number}
}

const Trap = (props:IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top:TILE_SIZE* props.initialPosition.y ,
        left:TILE_SIZE * props.initialPosition.x ,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: "no-repeat",
        animation: "TrapAnimation 1s steps(8) infinite",
      }}
    />
  );
};

export default Trap;
