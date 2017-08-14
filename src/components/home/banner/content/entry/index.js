import React from 'react';
import Container from './container';
import Audit from './audit';
import Text from './text';

const Menu = ({ clickHandler }) => (
  <Container onClick={ _ => clickHandler('BackEnd') } >
    <Audit />
    <Text>作者入口</Text>
  </Container>
)

export default Menu;
