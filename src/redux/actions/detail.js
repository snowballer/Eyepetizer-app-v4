import {
  FETCH_DETAIL_FEED
} from '../consts'


// Action Creator
const fetchDetailFeed = (id) => ({
  type: FETCH_DETAIL_FEED,
  payload: id
})

export default {
  fetchDetailFeed
}
