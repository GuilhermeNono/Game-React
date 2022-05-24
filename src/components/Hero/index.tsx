import React from "react";
import "./style.css";

import { TILE_SIZE, HEAD_OFFSET, Edirection } from "../../settings/constants";
import useHeroMovement from "../../Hooks/useHeroMovement";

const initialState = {
  x: 5,
  y: 9,
};

const Hero: React.FC = () => {
  
  const {direction, position} = useHeroMovement(initialState);

    return(<div
      style={{
        position: "absolute",
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: "no-repeat",
        animation: "HeroAnimation 0.7s steps(4) infinite",
        transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
      }}
    />
  );
};

export default Hero;
