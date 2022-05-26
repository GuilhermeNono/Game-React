import React from "react";
import { ECanvas } from "../../../context/canvas/helpers";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

const Tile = (props: IProps) => {
  function getTileColor() {
    switch (props.text) {
      case ECanvas.FLOOR:
        return "darkgray";
      case ECanvas.WALL:
        return "yellow";
      case ECanvas.HERO:
        return "magenta";
      case ECanvas.DOOR:
        return "white";
      case ECanvas.TRAP:
        return "chartreuse";
      case ECanvas.DEMON:
      case ECanvas.MINI_DEMON:
        return "chartreuse";
      case ECanvas.CHEST:
        return "cyan";
    }
  }

  const color = getTileColor();

  return (
    <div
      style={{
        position: "absolute",
        top: TILE_SIZE * props.position.y,
        left: TILE_SIZE * props.position.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        border: `1px solid ${color}`,
        color: color,
        fontSize: 32,
        zIndex: 2,
      }}
    >
      {props.text}
    </div>
  );
};

export default Tile;
