import styled from 'styled-components'
import { mediaQuery } from '../../../style'

export default styled.div`
  margin: 0 auto;
  width: 482px;
  font-size: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery} {
    flex-direction: column;
    width: 160px;
  }
`
