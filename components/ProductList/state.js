import React, { useState } from 'react'

export function FlipCardState() {
  const [cardState, setCardState] = useState({
    isActive: false,
  })
  const handleClick = e => {
    setCardState({
      isActive: !cardState.isActive,
    })
  }
  return {
    cardState,
    cardClick: handleClick,
    toggleCardOpen: () => setCardState({ isActive: true }),
    toggleCardClose: () => setCardState({ isActive: false }),
  }
}
