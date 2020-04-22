import "../css/main.css";
import Card from "../modules/card.js";
import Api from "../modules/api.js";
import { API_KEY, ENDPOINT } from "../modules/variables.js";

let newsGrid = document.querySelector(".news-grid");

const api = new Api({
  baseUrl: ENDPOINT,
  headers: {
    authorization: API_KEY,
    "Content-Type": "application/json"
  }
  //   query:
});
