import * as React from 'react'
import styled from 'styled-components'
const StyledHeader = styled.header`
  width: 100%;
  height: 90px;
  /* background: #dbdbdb; */
  display: flex;
  align-items: center;
  position: absolute;
`
const StyledContainerFluid = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  width: 100%;
  padding: 0 20px;
`

const StyledIcon = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 26px;
    letter-spacing: 12px;
    font-weight: 200;
    margin-left: 18px;
  }
`

const Header = props => {
  const renderLogo = props => {
    return (
      <StyledIcon>
        <div style={{ width: '64px', height: '56px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.22 39.565">
            <g transform="translate(375.199 -791.897)">
              <path
                id="Path_1"
                data-name="Path 1"
                d="M-375.2,803.7l6.662-7.576c1.134-1.289,2.26-2.584,3.412-3.857a1.071,1.071,0,0,1,.685-.353c3.283-.022,6.567-.015,9.85-.013a3,3,0,0,1,.341.042v39.45c-.178-.2-.3-.325-.4-.46q-5.741-7.6-11.477-15.207c-1.3-1.725-2.559-3.48-3.857-5.206a.621.621,0,0,1,.018-.85c.916-1.369,1.81-2.753,2.754-4.195-.2-.021-.354-.052-.508-.053-1.824,0-3.649-.024-5.472.011a1.16,1.16,0,0,1-1.162-.587C-374.585,804.463-374.884,804.122-375.2,803.7Zm17.787,1.722c-1.911,0-3.712,0-5.513.007a.611.611,0,0,0-.443.171c-.923,1.311-1.811,2.648-2.744,3.952-.29.405-.168.661.093,1,.931,1.2,1.834,2.424,2.75,3.637q2.694,3.57,5.39,7.138c.119.157.251.3.467.564Zm-.026-10.308c-1.835,0-3.613.014-5.389-.011a1.09,1.09,0,0,0-.926.433c-1.8,2.07-3.62,4.125-5.431,6.185-.107.122-.2.254-.358.447h12.1Z"
                transform="translate(0 0)"
                fill="#131313"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M-186.769,831.715V792.188h3.147v10.224h12.161c-.657-.753-1.256-1.442-1.858-2.127-.807-.919-1.627-1.828-2.419-2.759a1.176,1.176,0,0,1-.291-.671c-.026-1.436-.013-2.872-.013-4.52l10.221,11.614c-.386.517-.729,1.036-1.139,1.5a1,1,0,0,1-.676.219c-1.824.017-3.648.009-5.473.009h-.762c.642.944,1.226,1.78,1.785,2.632.453.691,1.222,1.408,1.211,2.1-.01.669-.824,1.339-1.312,1.988q-3.285,4.369-6.586,8.726a1.353,1.353,0,0,1-.491.436v-.579c0-1.331-.022-2.662.015-3.991a1.85,1.85,0,0,1,.338-.984c1.3-1.772,2.63-3.525,3.969-5.269a.624.624,0,0,0,.039-.886c-.882-1.241-1.716-2.516-2.587-3.766-.12-.172-.34-.388-.517-.391-1.841-.029-3.683-.018-5.611-.018v.8c0,6.793.007,13.586-.018,20.378a2.269,2.269,0,0,1-.407,1.218C-184.887,829.275-185.8,830.43-186.769,831.715Z"
                transform="translate(-164.157 -0.254)"
                fill="#131313"
              />
            </g>
          </svg>
        </div>
        <label>SKETCH</label>
      </StyledIcon>
    )
  }
  return (
    <StyledHeader>
      <StyledContainerFluid>{renderLogo()}</StyledContainerFluid>
    </StyledHeader>
  )
}

export { Header }
export default Header
