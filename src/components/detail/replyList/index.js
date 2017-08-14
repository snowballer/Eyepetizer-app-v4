import React from 'react'

import Container from '../../common/container'
import Title from '../common/title'
import Tip from './tip'
import Section from './section'
import Like from './like/index'
import Avatar from './avatar'
import Article from './article'
import Time from './time'
import Text from './text'
import Download from './download'

const ReplyList = ({ replyList }) => (
  <Container>
    <Title>热门评论</Title>
      { replyList.length === 0 ?
        <Tip>写下第一条评论吧</Tip> :
        replyList.map(reply =>
            <Section key={reply.id}>
              <Like likeCount={reply.likeCount} hot={reply.hot}/>
              <Avatar src={ reply.user.avatar } />
              <Article>
                <Text>{ reply.user.nickname }</Text>
                <Time>{ reply.time }</Time>
                <Text>{ reply.message }</Text>
              </Article>
            </Section>
        )
      }
      {
        replyList.length !== 0 && <Download />
      }
  </Container>
)

export default ReplyList
