import React, { useState, useRef } from 'react'
import FlipCard from './Flipcard'
import { FlipCardState } from './state'

function ProductBlock(productList) {
  const defaultRenderFront = props => {
    return (
      <>
        <button
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            bottom: '18px',
            left: '0',
            right: '0',
            margin: 'auto',
            width: '85px',
            height: '31px',
            background: '#000000d1',
            borderRadius: '7px',
            border: 'none',
            color: 'white',
          }}
          onClick={() => {
            props.handleClick()
            return
          }}
        >
          {'View Details'}
        </button>
        <img
          style={{ width: '100%', height: '100%' }}
          src={productList.list.image}
        />
      </>
    )
  }
  const defaultRenderBack = props => {
    return (
      <>
        <h1>{productList.list.price}</h1>
        <label>{productList.list.name}</label>
        <button
          style={{
            width: '100%',
            height: '36px',
            bottom: '11px',
            background: '#000000b8',
            borderRadius: '5px',
            color: 'white',
            border: 'navajowhite',
            position: 'absolute',
            left: '0px',
            right: '0px',
            margin: 'auto',
          }}
          onClick={() => {
            props.handleClick()

            return
          }}
        >
          Close
        </button>
      </>
    )
  }
  return (
    <FlipCard
      renderFront={defaultRenderFront}
      renderBack={defaultRenderBack}
      stateCard={FlipCardState}
      index={productList.index}
    />
  )
}

export { ProductBlock }
export default ProductBlock
