import React from "react";
import "./style.css";

import { Edirection, HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";
import useEnemyMovement from "../../Hooks/useEnemyMovement";

const MiniDemon: React.FC = () => {

  const {direction, position} = useEnemyMovement({x:9, y:5})

  return (
    <div
      style={{
        position: "absolute",
        bottom:TILE_SIZE*position.y ,
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
