import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7000/api",
  // baseURL: "https://beardmen-store-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});