import * as React from 'react'
import styled from 'styled-components'
import { configContact } from './fixture'
const StyledContactWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  background-size: 100%;

  .contact-container-fluid {
    width: 100%;
    max-width: 800px;
    padding: 110px 20px 190px 20px;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }
  svg.arrow {
    margin: 0 40px;
  }
  h1,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  .contact-wrapper {
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
    display: flex;
    flex-direction: column;
  }
  .info-wrapper {
    h1 {
      background: black;
      margin-bottom: 10px;
      color: white;
      padding: 0 5px;
    }
    .social-icons {
      margin-top: 20px;
      display: flex;

      a {
        background: black;
        display: flex;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        align-items: center;
        justify-content: center;

        svg path {
          fill: white;
        }
      }
    }
  }
`

const Contact = props => {
  return (
    <StyledContactWrapper
      style={{ backgroundImage: `url(${configContact.image})` }}
    >
      <div className="contact-container-fluid">
        <div className="contact-wrapper">
          <h1>{configContact.title}</h1>
          <p>{configContact.description}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arrow"
          width="59px"
          height="41px"
        >
          <path
            fillRule="evenodd"
            fill="rgb(19, 19, 19)"
            d="M-0.015,24.797 L42.959,24.797 L26.705,40.992 L38.195,40.992 L58.515,20.751 L38.195,0.508 L26.705,0.508 L42.959,16.702 L-0.015,16.702 L-0.015,24.797 Z"
          />
        </svg>
        <div className="info-wrapper">
          <h1>{configContact.name}</h1>
          <h3>{configContact.phonenumber}</h3>
          <p>{configContact.email}</p>
          <div className="social-icons">
            <a alt="facebook" href="//www.facebook.com/bkarthikeyan.karthi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 96.124 96.123"
              >
                <path
                  d={
                    'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z'
                  }
                />
              </svg>
            </a>
            <a
              alt="linkedin"
              href="//www.linkedin.com/in/karthikeyan-balan-78b762a3/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="-21 -21 682.66669 682.66669"
              >
                <path d="m166.148438 640h-165.460938v-445.839844h165.460938zm0 0" />
                <path d="m640 640h-162.101562l.070312-197.234375c.679688-32.015625-12.242188-58.421875-34.5625-70.640625-15.324219-8.394531-32.960938-8.417969-49.507812-.332031l-1.429688 268.207031h-169.648438v-445.839844h169.75v18.121094c52.738282-21.382812 108.664063-18.296875 157.265626 9.5 54.773437 31.335938 90.164062 89.265625 90.164062 147.585938zm0 0" />
                <path d="m83.078125 166.320312c-45.8125 0-83.078125-37.304687-83.078125-83.160156 0-45.855468 37.265625-83.160156 83.078125-83.160156 45.804687 0 83.070313 37.304688 83.070313 83.160156 0 45.855469-37.265626 83.160156-83.070313 83.160156zm0 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </StyledContactWrapper>
  )
}

export { Contact }
export default Contact
