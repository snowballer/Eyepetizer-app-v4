import styled from 'styled-components'
import Sprite from '../../sprite'
import { mediaQuery } from '../../../style'

const size = 428

export default styled(Sprite)`
  margin: 0;
  border: 1px solid #888;
  background-position: 0 40.79045%;
  background-size: ${size}px;
  border-radius: 20px;
  height: 100px;
  width: 100px;
  ${mediaQuery} {
    margin: 50px 0 30px;
  }
`
