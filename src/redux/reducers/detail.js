import moment from 'moment'
import {
  SET_VIDEO_INFO,
  SET_REPLY_LIST,
  SET_VIDEO_LIST
} from '../consts'
import initState from '../store/initState'
import { createReducer } from './index';

export const playVideoInfo = createReducer(initState.playVideoInfo, {
  [SET_VIDEO_INFO]: (state, { payload }) => payload
})

export const videoListInfo = createReducer(initState.videoListInfo, {
  [SET_VIDEO_LIST]: (state, { payload }) => payload
})

export const replyListInfo = createReducer(initState.replyListInfo, {
  [SET_REPLY_LIST]: (state, { payload }) => {
    const { count, nextPageUrl, replyList, total } = payload
    const newReplyList = replyList.map((reply, index) => {
      reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m')
      if (index === replyList.length - 1) {
        reply.lasted = true
      }
      return reply
    })

    return {
      count,
      nextPageUrl,
      replyList: newReplyList,
      total
    }
  }
})

export default {
  playVideoInfo,
  videoListInfo,
  replyListInfo
}
