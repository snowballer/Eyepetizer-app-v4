import React from 'react'
import { Link } from 'react-router-dom'

import Container from './container'
import Section from './section'
import Figure from './figure'
import Figcaption from './figcaption'
import Title from './title'
import Meta from '../../common/meta'

const RelateList = ({ videoList }) => (
  <Container>
    {
      videoList.map(video => (
        <Link to= {`/detail/${video.id}`} key={video.id}>
          <Section>
            <Figure style={{backgroundImage:`url(${video.coverForDetail})`}} />
            <Figcaption>
              <Title>{video.title}</Title>
              <Meta category={ video.category } time={ video.duration } />
            </Figcaption>
          </Section>
        </Link>
      ))
  }
  </Container>
)

export default RelateList
