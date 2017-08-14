import styled from 'styled-components'
import { mediaQuery } from '../../../style'
import Sprite from '../../sprite'

export default styled(Sprite)`
  margin: 0;
  background-position: 0 95.2381%;
  background-size: 642px;
  height: 75px;
  width: 120px;

  ${mediaQuery} {
    margin-bottom: 30px;
  }
`
