import React from 'react'
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import { media } from '../../styles'
const Main = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;

  h1 {
    font-size: 70px;
  }
  ${media.phoneOrSmaller`

  `}
`

const StyledCarosel = styled(Carousel)`
  ${media.phoneOrSmaller`
    width: 100%;
  `}
  width: 100%;
  height: fit-content;
  margin-bottom: 80px;

  .carousel.carousel-slider {
    height: 100%;
    .slider-wrapper {
      height: 100%;
      ul {
        height: 100%;
      }
    }
  }
  .thumbs-wrapper {
    display: none;
    margin-top: 0px;
  }
`
const StyledImageKit = styled.div`
  height: 100%;

  img {
    width: auto !important;
    height: 500px;
  }
`
const StyledDescription = styled.p``

export { Main, StyledImageKit, StyledDescription, StyledCarosel }
