import React, { useState } from 'react'
let pushed = []
function ProductCart(props) {
  const { cardState, cardClick, toggleCardClose } = props.stateCard()
  const handleClick = e => {
    if (pushed.length > 0) {
      let currentElement = pushed[0]
      if (currentElement.index !== props.index) {
        if (!currentElement.cardState.isActive === true) {
          currentElement.toggleCardClose()
        }
        pushed = []
      }
    }
    if (cardState.isActive === true) {
    } else {
      if (pushed.length == 0) {
        pushed.push({ props, cardState, cardClick, toggleCardClose })
      }
      cardClick()
    }
  }
  return (
    <aside
      style={{
        width: '200px',
        height: '200px',
        position: 'relative',
        perspective: 600,
        float: 'left',
        margin: '10px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transformStyle: 'preserve-3d',
          transition: 'all 400ms ease-in-out',
          transform: cardState.isActive ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          style={{
            backgroundColor: '#f5f5f5',
            backfaceVisibility: 'hidden',
            height: '100%',
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            border: '9px solid transparent',
            boxSizing: 'border-box',
          }}
          className={'FrontCard'}
        >
          {props.renderFront({ handleClick, cardState })}
        </div>
        <div
          style={{
            backgroundColor: '#ff8a80',
            backfaceVisibility: 'hidden',
            height: '100%',
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            transform: 'rotateY(180deg)',
            border: '9px solid transparent',
            boxSizing: 'border-box',
          }}
          className={'BackCard'}
        >
          {props.renderBack({ handleClick, cardState })}
        </div>
      </div>
    </aside>
  )
}

export { ProductCart }

export default ProductCart
