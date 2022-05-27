import React from "react";

interface IProps {
  children: React.ReactNode
}

export const ChestContext = React.createContext({
  totalChests: 2,
  openedChest: {
    total:0,
    positions: []
  },
  updateOpenedChests: () => null
})

function ChestsProvider(props:IProps) {
  const [chestsState, updateChestsState] = React.useState({
    totalChests: 2,
    openedChest: {
      total:0,
      positions: []
    },
    updateOpenedChests: () => {
      console.log('Chests');
    }
  })
  return (
    <ChestContext.Provider value={chestsState}>
      {props.children}
      </ChestContext.Provider>
  )
}

export default ChestsProvider;