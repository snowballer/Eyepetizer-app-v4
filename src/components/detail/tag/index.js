import React from 'react'

import Container from '../../common/container'
import Title from '../common/title'
import List from './list'
import Tag from './tag'
/**
 * 标签页
 */
const TagList = ({ tags }) => (
  <Container>
    <Title>热门标签</Title>
    <List>
      {
        tags.map((tag,index) =>
          <Tag key={index}>{ tag.name }</Tag>
        )
      }
    </List>
  </Container>
)

export default TagList
