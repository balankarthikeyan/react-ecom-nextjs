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
      </StyledImageKit>
    )
  })
  return (
    <StyledCarosel autoPlay={true} showIndicators={true}>
      {ImageList}
    </StyledCarosel>
  )
}

export { CaroselImages }
