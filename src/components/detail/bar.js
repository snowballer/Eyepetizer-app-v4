import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container= styled.div`
  bottom: 0;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 20;
`
const Img= styled.img`
  bottom: 0;
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%)
`
const srcImg = "http://img.kaiyanapp.com/5b374448f6fe145337ee41d363d436d6.png"

const Bar= _ => (
    <Container>
      <Link to="/">
        <Img src={srcImg} />
      </Link>
    </Container>
)

export default Bar
