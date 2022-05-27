import React from "react";
import CanvasProvider from "../context/canvas";
import ChestsProvider from "../context/chests";
import Board from "./Board";
import Debugger from "./Debugger";

const Game = () => {
  return (
    <CanvasProvider>
      <ChestsProvider>
        <Debugger />
        <Board />
      </ChestsProvider>
    </CanvasProvider>
  );
};

export default Game;
