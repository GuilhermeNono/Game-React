import React from "react";
import "./style.css";

import { TILE_SIZE } from "../../settings/constants";

const Trap: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom:48*12 ,
        left:48 * 9 ,
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
