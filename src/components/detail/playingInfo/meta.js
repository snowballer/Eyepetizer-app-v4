import React from 'react'
import styled from 'styled-components'
import { detail } from '../../style'
import { dateFormatter } from '../../../utils'

const Container = styled.p`
  font-size: 12px;
  opacity: .85;
`

const Meta = ({ category, time }) => (
  <Container>
    { category } / { dateFormatter(time * 1000) }
  </Container>
)

export default styled(Meta)`
  width: 100px;
  border-top: ${detail.border};
  padding-top: 7px;
  margin: 0;
  margin-bottom: 12px;
`
