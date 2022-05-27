import React from "react";
import { canvas, checkValidMovement, ECanvas, handleNextPosition } from "./helpers";

interface IProps {
  children: React.ReactNode
}

export const CanvasContext = React.createContext({
  canvas: [],
  updateCanvas: (direction, position, walker) => null
});

function CanvasProvider(props: IProps) {
  const [canvasState, updateCanvasState] = React.useState({
    canvas: canvas,
    updateCanvas: (direction, position, walker) => {
      const nextMovement = handleNextPosition(direction, position);
      const checkMove = checkValidMovement(nextMovement, walker);

      if(checkMove.valid) {
         updateCanvasState((prevState) => {
           const newCanvas = Object.assign([], prevState.canvas);
           const currentValue = newCanvas[position.y][position.x];

           newCanvas[position.y][position.x] = ECanvas.FLOOR;
           newCanvas[nextMovement.y][nextMovement.x] = currentValue

           return {
             canvas:newCanvas,
             updateCanvas: prevState.updateCanvas
           }
         })
      }

      return {
        nextMovement, 
        checkMove
      }
    },
  });

  return (
    <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
  )
}

export default CanvasProvider;