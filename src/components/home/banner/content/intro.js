import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../style';
import Sprite from '../../sprite';

const Intro = styled(Sprite)`
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  height: 54px;
  width: 351px;
  top: 54%;
  background-position: 0 55.5773%;
  z-index: 12;

  ${mediaQuery} {
    background-size: 528.59829px;
    height: 44px;
    width: 289px;
  }
`

export default _ => <Intro />
