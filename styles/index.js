import { css, createGlobalStyle } from 'styled-components'

const mediaProperties = {
  desktopOrLarger: {
    screenRange: 'min-width',
    width: 1024,
  },
  desktopOrSmaller: {
    screenRange: 'max-width',
    width: 1366,
  },
  tabletOrLarger: {
    screenRange: 'min-width',
    width: 768,
  },
  tabletOrSmaller: {
    screenRange: 'max-width',
    width: 1023,
  },
  phoneOrLarger: {
    screenRange: 'min-width',
    width: 0,
  },
  phoneOrSmaller: {
    screenRange: 'max-width',
    width: 767,
  },
}

export const media = Object.keys(mediaProperties).reduce(
  (mediaItem, screenType) => {
    mediaItem[screenType] = (...args) => css`
      @media (${mediaProperties[screenType].screenRange}: ${mediaProperties[
      screenType
    ].width / 16}em) {
        ${css(...args)}
      }
    `
    return mediaItem
  },
  {}
)

export const GlobalStyled = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto'); */
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', arial, verdana;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background: transparent;
  }

  h1, h3 {
    text-align: center;
  }
`
