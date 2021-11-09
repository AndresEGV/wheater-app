import axios from "axios";
const baseURL = "https://api.weatherbit.io/v2.0/current";

export default axios.create({
  baseURL,
});
