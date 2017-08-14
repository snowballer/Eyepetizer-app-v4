import React from 'react'

import Container from './container'
import Layer from './layer'
import Title from './title/'

const Cover = ({ cover, title, category, time }) => (
  <Container cover={ cover } >
    <Layer className="layer" />
    <Title title={ title } category={ category } time={ time } />
  </Container>
)


export default Cover
