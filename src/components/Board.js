/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
  // TODO - use the 'squares' state from the game reducer
  const squares = useSelector((store) => store.game.squares)

  return (
    <div className="board">
      {squares.map((value, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
