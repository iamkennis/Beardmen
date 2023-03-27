import axios from "axios";

export default axios.create({
  baseURL: "https://purple-buffalo-wear.cyclic.app/api",
  // baseURL: "https://beardmen-store-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});