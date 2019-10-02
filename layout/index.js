import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

import { GlobalStyled } from '../styles'

const Layout = ({ children, title = 'This is the default title' }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min.js" />
    </Head>
    {children}
    <GlobalStyled />
  </React.Fragment>
)

export { Layout }
export default Layout
