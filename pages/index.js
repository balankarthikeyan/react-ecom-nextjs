import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Header, About, Contact, Portfolio } from '../components'
const StyledStaticBanner = styled.img`
  width: 100%;
`

const HomePage = props => {
  const { title = 'BK' } = props

  return (
    <Layout title={title}>
      <Header />
      <StyledStaticBanner src="//ntryogep.sirv.com/pencil-sketch/banner_01.jpg" />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  )
}

export default HomePage
