import React from "react";
import "./style.css";

import { TILE_SIZE } from "../../settings/constants";

const Chest: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top:48*8 ,
        left:48 ,
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
