import React from "react";
import "./style.css";

import { TILE_SIZE } from "../../settings/constants";

interface IProps {
  initialPosition: {x:number; y:number}
}

const Chest= (props:IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top:TILE_SIZE* props.initialPosition.y,
        left:TILE_SIZE* props.initialPosition.x,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/CHEST.png)",
        backgroundRepeat: "no-repeat",
        animation: "ChestAnimation 1s steps(3) infinite",
      }}
    />
  );
};

export default Chest;
