import React from "react";
import "./style.css";

import { TILE_SIZE, DEMON_TILE_SIZE, Edirection} from "../../settings/constants";
import useEnemyMovement from "../../Hooks/useEnemyMovement";
const Demon: React.FC = () => {

  const {direction, position} = useEnemyMovement({x:5, y:5})

  return (
    <div
      style={{
        position: "absolute",
        bottom:TILE_SIZE* position.y ,
        left:TILE_SIZE * position.x ,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
        animation: "DemonAnimation 1s steps(4) infinite",
      }}
    />
  );
};

export default Demon;
