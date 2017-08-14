import styled from 'styled-components';
import { mediaQuery } from '../../../../style';

export default styled.div`
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  height: 52px;
  margin-top: 120px;
  top: 67%;
  z-index: 12;

  ${mediaQuery} {
    display: none;
  }
`
