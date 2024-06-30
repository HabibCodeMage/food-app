import axios, { AxiosInstance } from "axios";
import Categories from "./services/Categories";
import Restaurants from "./services/Restaurants";

const BACKEND_BASE_URL = "https://gist.githubusercontent.com/wilson-wego";

class Api {
  axios: AxiosInstance;
  token: string | undefined;
  restaurants: Restaurants;
  categories: Categories;

  constructor() {
    this.axios = axios.create({
      baseURL: `${BACKEND_BASE_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.categories = new Categories(this.axios);
    this.restaurants = new Restaurants(this.axios);
  }
}

const api = new Api();
export default api;
