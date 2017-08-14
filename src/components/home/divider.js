import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  background-color: white;
  font-family: Lobster,cursive;
  font-size: 16px;
  color: black;
  line-height: 90px;
  text-align: center;
  margin: 0;
`

const Divider = ({ text }) => (
  <Container>
    { text }
  </Container>
)

export default Divider;
