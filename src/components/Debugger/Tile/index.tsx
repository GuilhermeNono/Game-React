import React from "react";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

const Tile = (props: IProps) => {

  function getTileColor() {
    switch(props.text){
      case 0:
        return 'red'
      case 1:
        return 'yellow'
      case 2:
        return 'blue'
      case 3:
        return 'green'
    }
  }

  const color = getTileColor()

  return (
    <div
      style={{
        position: "absolute",
        top: TILE_SIZE * props.position.y,
        left: TILE_SIZE * props.position.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        border: `1px solid ${color}`,
        color: color
      }}
    >
      {props.text}
    </div>
  );
};

export default Tile;
