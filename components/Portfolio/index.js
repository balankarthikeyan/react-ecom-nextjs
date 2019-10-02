import React from 'react'
import { Main } from './styled'
import { CaroselImages } from './carosel'
import fetch from 'node-fetch'
class Portfolio extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      portfolio: [],
    }
  }

  static defaultProps = {
    className: '',
    response: '//ntryogep.sirv.com/ecom/banner.json',
  }
  async componentDidMount() {
    const { response } = this.props
    fetch(response)
      .then(function(res, error) {
        return res.json()
      })
      .then(res => {
        this.setState({ portfolio: res })
      })
  }
  render() {
    const { className } = this.props
    return (
      <Main className={className}>
        <CaroselImages response={this.state.portfolio} />
      </Main>
    )
  }
}

export { Portfolio }
export default Portfolio
