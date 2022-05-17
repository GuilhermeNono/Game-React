import useEventListener from '@use-it/event-listener';
import React from "react";
import "./style.css";

import { TILE_SIZE, HEAD_OFFSET} from "../../settings/constants";

const initialState = {
  x: 5,
  y: 9
}

const Hero: React.FC = () => {

  const [positionState, updatePositionState] = React.useState(initialState);
  const [direction, updateDirection] = React.useState('RIGHT')

  const newState = {
    x: positionState.x,
    y: positionState.y
  }

  useEventListener('keydown', (event:KeyboardEvent) => {

    

    if(event.key === 'w' || event.key === 'ArrowUp') {
      newState.y++
      updatePositionState(newState)
    }
    if(event.key === 'a' || event.key === 'ArrowLeft') {
      newState.x--
      updatePositionState(newState)
      updateDirection('LEFT')
    }
    if(event.key === 's' || event.key === 'ArrowDown') {
      newState.y--
      updatePositionState(newState)
    }
    if(event.key === 'd' || event.key === 'ArrowRight') {
      newState.x++
      updatePositionState(newState)
      updateDirection('RIGHT')
    }

  })

  return (
    <div
      style={{
        position: "absolute",
        bottom:TILE_SIZE* positionState.y ,
        left:TILE_SIZE * positionState.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundPosition:`0 -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: "no-repeat",
        animation: "HeroAnimation 0.7s steps(4) infinite",
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
      }}
    />
  );
};

export default Hero;
