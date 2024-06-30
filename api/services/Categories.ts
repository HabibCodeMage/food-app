import ApiBase from "../common/ApiBase";

export default class Categories extends ApiBase {
  async get() {
    return this.axios.get(
      "/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json"
    );
  }
}
