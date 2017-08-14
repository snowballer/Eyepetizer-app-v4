import React from 'react'
import styled from 'styled-components'

import { dateFormatter } from '../../utils'

const Container = styled.p`
  font-size: 12px;
  opacity: .85;
`

const Meta = ({ category, time }) => (
  <Container>
    # { category } / { dateFormatter(time * 1000) }
  </Container>
)

export default Meta
