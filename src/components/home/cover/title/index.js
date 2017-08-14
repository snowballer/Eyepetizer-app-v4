import React, { Component } from 'react'

import Container from './container'
import Title from './title'
import Meta from './meta'

class MyTitle extends Component {

  render () {
    const { title, category, time } = this.props
    return (
      <Container>
        <Title>{ title }</Title>
        <Meta
          category={ category }
          time={ time } />
      </Container>
    )
  }

}

export default MyTitle
