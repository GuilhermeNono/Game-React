import useEventListener from "@use-it/event-listener";
import React from "react";
import { handleNextPosition } from "../../context/canvas/helpers";
import { Edirection } from "../../settings/constants";
function useHeroMovement(initialState) {

  const [positionState, updatePositionState] = React.useState(initialState);
  const [direction, updateDirection] = React.useState(Edirection.RIGHT);

  const newState = {
    x: positionState.x,
    y: positionState.y,
  };

  useEventListener("keydown", (event: KeyboardEvent) => {

    const direction = event.key as Edirection

    const nextMovement = handleNextPosition(direction, positionState)
    updateDirection(direction)
    updatePositionState(nextMovement)
  });

  return {
    position: positionState,
    direction: direction
  }
}

export default useHeroMovement;
