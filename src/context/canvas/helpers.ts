import React from "react";
import { Edirection, EWalker } from "../../settings/constants";

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

export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7,
}

const {
  CHEST: CH,
  FLOOR: FL,
  WALL: WL,
  DEMON: DM,
  DOOR: DR,
  HERO: HE,
  MINI_DEMON: MD,
  TRAP: TR,
} = ECanvas;

/**
 * VALOR 1 = Parede
 */

export const canvas = [
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL,],
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,TR,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,TR,FL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,HE,WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,FL,FL,FL,FL,FL,FL,DM,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,],
];

export function checkValidMovement(nextPosition, walker) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  const result =
    walker === EWalker.HERO
      ? getHeroValidMoves(canvasValue)
      : getEnemyValidMoves(canvasValue);

      return result;
}

function getHeroValidMoves(canvasValue) {
  return {
    valid:
      canvasValue === ECanvas.FLOOR ||
      canvasValue === ECanvas.CHEST ||
      canvasValue === ECanvas.TRAP ||
      canvasValue === ECanvas.DEMON ||
      canvasValue === ECanvas.MINI_DEMON,
    dead:
      canvasValue === ECanvas.TRAP ||
      canvasValue === ECanvas.DEMON ||
      canvasValue === ECanvas.MINI_DEMON,
    chest: canvasValue === ECanvas.CHEST,
    door: canvasValue === ECanvas.DOOR,
  };
}

function getEnemyValidMoves(canvasValue) {
  return {
    valid:canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
    dead: false,
    chest: false,
    door: false,
  };
}
