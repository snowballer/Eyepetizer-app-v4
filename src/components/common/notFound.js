import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 150px;
`
const Tip = styled.h1`
  color: #fff;
  text-align: center;
`
const Description = styled.p`
  color: #fff;
  text-align: center;
  font-size: 28px;
`
const NotFound = () =>(
  <Container>
    <Tip>404 NOT FOUND</Tip>
    <Description>页面不存在</Description>
  </Container>
)
export default NotFound
