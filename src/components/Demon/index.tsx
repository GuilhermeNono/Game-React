import React from "react";
import "./style.css";

import { TILE_SIZE, DEMON_TILE_SIZE} from "../../settings/constants";

const Demon: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom:TILE_SIZE*3 ,
        left:TILE_SIZE * 2 ,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "DemonAnimation 1s steps(4) infinite",
      }}
    />
  );
};

export default Demon;
