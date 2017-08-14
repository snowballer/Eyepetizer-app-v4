import React from 'react'
import styled from 'styled-components'
import Count from './count'
import LikeCount from './likeCount'
import Hot from './hot'

const Container= styled.div`
  position: absolute;
  text-align: right;
  display: inline-block;
  top: 0;
  right: 16px;
`
const Like = ({ likeCount,hot }) => (
    <Container>
      <Count>{likeCount}</Count>
      <LikeCount />
      {
        hot &&
        <Hot>- Hot -</Hot>
      }
    </Container>
)
export default Like
