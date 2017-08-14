import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container= styled.div`
  padding: 0 16px;
`
const Description= styled.button`
  background: hsla(0,0%,100%,.3);
  border-radius: 2px;
  border: none;
  color: #fff;
  line-height: 32px;
  margin-bottom: 16px;
  padding: 0;
  width: 100%;
`
const Download = _ => (
    <Container>
      <Link to='/'>
        <Description>下载开眼客户端，查看更多精彩评论！</Description>
      </Link>
    </Container>
)

export default Download
