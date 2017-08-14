import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Launch from './launch'

const Container= styled.div`
  background: rgba(0,0,0,.3);
  height: 70px;
  position: relative;
  border-bottom: 1px solid #fff;
  z-index: 10;
`

const Download = _ => (
    <Container>
      <Logo />
      <Launch />
    </Container>
)

export default Download
