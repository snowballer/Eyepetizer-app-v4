import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Sprite from '../../../sprite'

const Button = styled(Sprite)`
  margin: 0;
  height: 52px;
  width: 162px;
`

const IOS = styled(Button)`
  background-position: 0 28.49707%
`

const Android = styled(Button)`
  background-position: 0 14.3136%;
`

const Download = ({ clickHandler }) => (
  <Container>
    <IOS onClick={ _ => clickHandler('iOS') } />
    <Android onClick={ _ => clickHandler('Android') } />
  </Container>
)

export default Download
