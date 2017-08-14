import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../style';
import Sprite from '../../sprite';

const size = 52

const Container = styled.div`
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  font-size: 0;
  height: 52px;
  top: 67%;
  z-index: 12;

  ${mediaQuery} {
    height: 124px;
    top: 77%;
    width: 162px;
    display: flex;
    flex-direction: column;
  }
`

const Button = styled(Sprite)`
  height: ${size}px;
  width: 163px;
  opacity: .9;
  margin: 0;
`

const IOS = styled(Button)`
  background-position: 0 21.40534%;
`

const Android = styled(Button)`
  margin-left: 30px;
  background-position: 0 7.22186%;
  ${mediaQuery} {
    margin-left: 0;
    margin-top: auto;
  }
`

export default ({ clickHandler }) => (
  <Container>
    <IOS onClick={ _ => clickHandler('iOS') } />
    <Android onClick={ _ => clickHandler('Android') } />
  </Container>
)
