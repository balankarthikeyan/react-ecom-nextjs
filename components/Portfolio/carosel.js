import React from 'react'
import { Main } from './styled'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled, { css } from 'styled-components'
import fetch from 'node-fetch'
import { StyledImageKit, StyledDescription, StyledCarosel } from './styled'

const CaroselImages = props => {
  const { response } = props
  const ImageList = response.map(function(item, i) {
    return (
      <StyledImageKit>
        <img className={'carosel-image'} src={item.image} />
        <StyledDescription className="legend">MyWork {i + 1}</StyledDescription>
      </StyledImageKit>
    )
  })
  return (
    <StyledCarosel autoPlay={false} showIndicators={false}>
      {ImageList}
    </StyledCarosel>
  )
}

export { CaroselImages }
