import React from "react";
import "./style.css";

import { Edirection, HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";
import useEnemyMovement from "../../Hooks/useEnemyMovement";

interface IProps {
  initialPosition: {x: number; y: number}
}

const MiniDemon = (props:IProps) => {

  const {direction, position} = useEnemyMovement(props.initialPosition)

  return (
    <div
      style={{
        position: "absolute",
        top:TILE_SIZE*position.y - HEAD_OFFSET,
        left:TILE_SIZE*position.x ,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundPosition:`0 -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: "no-repeat",
        transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
        animation: "MiniDemonAnimation 1s steps(4) infinite",
      }}
    />
  );
};

export default MiniDemon;
