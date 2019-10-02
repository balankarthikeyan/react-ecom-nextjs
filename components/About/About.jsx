import * as React from 'react'
import styled from 'styled-components'
import { configAbout } from './fixture'
const StyledAboutWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  background: #000;

  .about-container-fluid {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }

  .image-wrapper {
    img {
      height: auto;
      width: 600px;
      pointer-events: none;
    }
  }

  .about-wrapper {
    flex-direction: column;
    h1,
    h3,
    p {
      color: white;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 70px;
      text-transform: uppercase;
    }
    h3 {
      font-size: 36px;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
      width: 370px;
      margin-top: 20px;
    }
  }
  .image-wrapper,
  .about-wrapper {
    display: flex;
  }
`

const About = props => {
  return (
    <StyledAboutWrapper>
      <div className="about-container-fluid">
        <div className="image-wrapper">
          <img src={configAbout.image} />
        </div>
        <div className="about-wrapper">
          <h1>{configAbout.title}</h1>
          <h3>{configAbout.subtitle}</h3>
          <p>{configAbout.description}</p>
        </div>
      </div>
    </StyledAboutWrapper>
  )
}

export { About }
export default About
