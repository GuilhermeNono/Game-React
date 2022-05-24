import { Edirection } from "../../settings/constants";

export function handleNextPosition(direction, position) {
  switch (direction) {
    case Edirection.LEFT:
      return { x: position.x - 1, y: position.y };
    case Edirection.RIGHT:
      return { x: position.x + 1, y: position.y };
    case Edirection.UP:
      return { x: position.x, y: position.y - 1 };
    case Edirection.DOWN:
      return { x: position.x, y: position.y + 1 };
  }
}

/**
 * VALOR 1 = Parede
 */

export const canvas = [
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
]