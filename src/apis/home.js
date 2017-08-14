//http请求数据
import axios from 'axios';

class HomeServer{
  fetchHomeFeed() {
    return axios.get(`/api/v1/feed`);
  }
}

export default new HomeServer();
