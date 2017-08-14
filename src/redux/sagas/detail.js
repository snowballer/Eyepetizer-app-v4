import {
  call,
  take,
  put,
  fork
} from 'redux-saga/effects'
import detailService from '../../apis/detail'
import {
  FETCH_DETAIL_FEED,
  SET_VIDEO_INFO,
  SET_VIDEO_LIST,
  SET_REPLY_LIST
} from '../consts'


function* fetchVideoInfo (id){
  const videoInfo = (yield call(detailService.fetchVideoInfo, id)).data
  yield put({
    type: SET_VIDEO_INFO,
    payload: videoInfo
  })
}

function* fetchVideoList (id){
  const videoList= (yield call(detailService.fetchVideoList, id)).data
  yield put({
    type: SET_VIDEO_LIST,
    payload: videoList
  })
}

function* fetchReplyList (id){
  const replyList = (yield call(detailService.fetchReplyList, id)).data
  yield put({
    type: SET_REPLY_LIST,
    payload: replyList
  })
}

export function* watchFetchDetail (){
  while (true) {
    const { payload: id } = yield take(FETCH_DETAIL_FEED)
    yield fork(fetchVideoInfo, id)
    yield fork(fetchVideoList, id)
    yield fork(fetchReplyList, id)
  }
}
