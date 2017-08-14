import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Player from '../../common/detailPlayer'
import Cover from './cover'
import PlayButton from './playButton'
import Container from './container'

const Video = styled(Player)`
  position: absolute;
`

class MyPlayer extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      isPlaying: false
    }
    this.startPlay = this.startPlay.bind(this)
  }

  startPlay () {
    this.setState({
      isPlaying: true
    })
  }

  render () {
    const { isPlaying } = this.state
    return (
      <Container>
        <Video
          isPlay={ isPlaying }
          controls={ isPlaying }
          url={ this.props.url }
          key={this.props.url}/>
        {
          !isPlaying &&
          <Cover style={{backgroundImage:`url(${this.props.cover})`}} />
        }
        {
          !isPlaying &&
          <PlayButton onClick={ this.startPlay } />
        }
      </Container>
    )
  }

}

export default MyPlayer
