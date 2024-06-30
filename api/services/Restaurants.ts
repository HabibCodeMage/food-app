import ApiBase from "../common/ApiBase";

export default class Restaurants extends ApiBase {
  async get() {
    return this.axios.get(
      "/8311b463cd331099e34a1f251dad4cbf/raw/ef4e1b48002e5017dd78bbb48a2adf8a97419529/food.json"
    );
  }
}
