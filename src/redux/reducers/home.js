import initState from '../store/initState';
import { createReducer } from './index';
import {
  SET_HOME_FEED
} from '../consts';

const homeFeed= createReducer(initState.homeFeed, {
  [SET_HOME_FEED]:(state, { payload }) => {
    const [ daily ] = payload.dailyList
    const { videoList } = daily
    return videoList
  }
})

export default {
  homeFeed
}
