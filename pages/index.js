import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Portfolio, ProductList } from '../components'
const StyledStaticBanner = styled.img`
  width: 100%;
`

const HomePage = props => {
  const { title = 'PLP' } = props

  return (
    <Layout title={title}>
      <h1> {'ECOM GIANT'}</h1>
      <Portfolio />
      <h3> {'Today Offers'}</h3>
      <ProductList limit={30} />
    </Layout>
  )
}

export default HomePage
