import useInterval from "@use-it/interval";
import React from "react";
import { checkValidMovement, handleNextPosition } from "../../context/canvas/helpers";
import { Edirection } from "../../settings/constants";
function useEnemyMovement(initialState) {

  const [positionState, updatePositionState] = React.useState(initialState);
  const [direction, updateDirection] = React.useState(Edirection.RIGHT);

  const newState = {
    x: positionState.x,
    y: positionState.y,
  };



  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(Edirection)
    var randomDirection = directionArray[random]
    
    const nextMovement = handleNextPosition(randomDirection, positionState)

    const checkCanvas = checkValidMovement(nextMovement)

    if(checkCanvas) {
      updateDirection(randomDirection)
      updatePositionState(nextMovement)
    }
  }, 2000)
  

  return {
    position: positionState,
    direction: direction
  }
}

export default useEnemyMovement;
