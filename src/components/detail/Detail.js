import React,{Component} from 'react';
import {
  is,
  fromJS
} from 'immutable'
import reducers from '../../redux/reducers/detail'
import { connect } from 'react-redux'
import { injectReducer } from '../../redux/reducers'
import actions from '../../redux/actions/detail';


import Loading from '../common/loading'
import Container from './container'
import Article from './article'
import Player from './player'
import PlayingInfo from './playingInfo'
import Download from './download'
import RelateList from './relateList'
import ReplyList from './replyList'
import Tag from './tag'
import Footer from './footer'
import Bar from './bar'

class Detail extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    window.scrollTo(0, 0)
    const ID = this.props.match.params.id
    if (!ID) {
      this.props.history.push('/')
    } else {
      this.props.fetchDetailFeed(ID)
    }
  }

  // componentWillReceiveProps(nextProps){
  //   const ID = nextProps.match.params.id;
  //   if (!is(fromJS(nextProps), fromJS(this.props))) {
  //     this.props.fetchDetailFeed(ID)
  //   }
  // }

  shouldComponentUpdate (nextProps) {
    return !is(fromJS(nextProps), fromJS(this.props))
  }

  render() {
    const { playVideoInfo, videoListInfo, replyListInfo } = this.props
    if (playVideoInfo && videoListInfo && replyListInfo) {
      return (
        <div>
          <Container>
            <Player url={ playVideoInfo.playUrl } cover={playVideoInfo.coverForDetail}/>
            <Article style={{backgroundImage:`url(${playVideoInfo.coverBlurred})`}}>
              <PlayingInfo videoInfo={ playVideoInfo } />
              <Download />
              <RelateList videoList={ videoListInfo.videoList } />
              <ReplyList replyList={ replyListInfo.replyList } />
              {
                playVideoInfo.tags.length ? <Tag tags={ playVideoInfo.tags } /> : ""
              }
              <Footer />
            </Article>
          </Container>
          <Bar />
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

Object.keys(reducers).map(
  key => {injectReducer(key, reducers[key])}
)

const FinalDetail = connect(
  ({ playVideoInfo, videoListInfo, replyListInfo }) => ({ playVideoInfo, videoListInfo, replyListInfo }),actions
)(Detail);

export default function (props) {
  return (<FinalDetail {...props} key={props.match.url} />);
}
