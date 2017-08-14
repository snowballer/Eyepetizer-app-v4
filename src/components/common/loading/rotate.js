import styled, { keyframes } from 'styled-components'
import {
  loading
} from '../../style'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export default styled.figure`
  margin: 0;
  background-image: url(${loading.rotateImg});
  background-size: cover;
  height: ${loading.height}px;
  width: ${loading.width}px;
  animation: ${rotate360} .5s linear infinite;
`
