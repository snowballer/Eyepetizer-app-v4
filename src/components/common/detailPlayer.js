import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';


const MyVideo = styled.video`
  height: 100%;
  width: 100%;
`

class Video extends PureComponent {

  componentWillReceiveProps (nextProps) {
    const video = this.getDom()
    nextProps.isPlay
    ? video.play()
    : video.pause()
  }

  getDom () {
    return ReactDom.findDOMNode(this);
  }

  render () {
    return (
      <MyVideo { ...this.props } key={this.props.url}>
        <source src={ this.props.url } />
      </MyVideo>
    )
  }

}

export default Video;
