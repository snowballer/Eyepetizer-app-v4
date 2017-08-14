//http请求数据
import axios from 'axios';

class DetailService{
  fetchVideoInfo(id) {
    return axios.get(`/api/v1/video/${id}`);
  }
  fetchVideoList(id){
    return axios.get(`/api/v1/video/related/${id}?num=10`);
  }
  fetchReplyList(id){
    return axios.get(`/api/v1/replies/video/?id=${id}&num=5`);
  }
}
export default new DetailService();
