import React from "react";
import "./style.css";

import { HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

const MiniDemon: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom:TILE_SIZE*2 ,
        left:TILE_SIZE ,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundPosition:`0 -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: "no-repeat",
        animation: "MiniDemonAnimation 1s steps(4) infinite",
      }}
    />
  );
};

export default MiniDemon;
