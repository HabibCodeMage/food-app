import ApiBase from '../common/ApiBase';

export default class Categories extends ApiBase {
  async getUser() {
    return this.axios.get('/');
  }
}