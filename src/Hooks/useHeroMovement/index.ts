import useEventListener from "@use-it/event-listener";
import React from "react";
import { CanvasContext } from "../../context/canvas";
import { ChestContext } from "../../context/chests";
import { Edirection, EWalker } from "../../settings/constants";
function useHeroMovement(initialState) {
  const canvasContext = React.useContext(CanvasContext)
  const chestsContext = React.useContext(ChestContext)
  const [positionState, updatePositionState] = React.useState(initialState);
  const [direction, updateDirection] = React.useState(Edirection.RIGHT);

  useEventListener("keydown", (event: KeyboardEvent) => {

    const direction = event.key as Edirection

    if(direction.indexOf("Arrow") === -1) {
      return;
    }
    const { nextMovement, checkMove} = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

    if(checkMove.valid) {
      updateDirection(direction)
      updatePositionState(nextMovement)
    }

    if(checkMove.dead){
      console.log('Você morreu!')
    }

    if(checkMove.chest) {
      chestsContext.updateOpenedChests();
    }
  });

  return {
    position: positionState,
    direction: direction
  }
}

export default useHeroMovement;
