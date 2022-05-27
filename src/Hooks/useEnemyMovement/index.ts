import useInterval from "@use-it/interval";
import React from "react";
import { CanvasContext } from "../../context/canvas";
import { Edirection, EWalker } from "../../settings/constants";
function useEnemyMovement(initialState) {

  const canvasContext = React.useContext(CanvasContext)

  const [positionState, updatePositionState] = React.useState(initialState);
  const [direction, updateDirection] = React.useState(Edirection.RIGHT);

  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(Edirection)
    var randomDirection = directionArray[random]
    // debugger;
    const {nextMovement, checkMove} = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY)

    if(checkMove.valid) {
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
