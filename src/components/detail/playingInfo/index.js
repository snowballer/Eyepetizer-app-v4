import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Divider from './divider'
import Title from './title'
import Meta from './meta'
import Desc from './desc'

const MyMeta = styled(Meta)`
  font-size: 14px;
`

const PlayingInfo = ({ videoInfo }) => (
  <Container>
    <Title>{ videoInfo.title }</Title>
    <Divider />
    <MyMeta
      category={ videoInfo.category }
      time={ videoInfo.duration } />
    <Desc>{ videoInfo.description }</Desc>
  </Container>
)

export default PlayingInfo
