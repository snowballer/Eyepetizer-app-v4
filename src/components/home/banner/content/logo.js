import styled from 'styled-components';
import { mediaQuery } from '../../../style';
import Sprite from '../../sprite';

export default styled(Sprite)`
  top: 30%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  height: 225px;
  width: 180px;
  background-position: 0 81.02435%;
  z-index: 12;

  ${mediaQuery} {
    height: 150px;
    width: 120px;
    background-size: 428px;
  }
`
