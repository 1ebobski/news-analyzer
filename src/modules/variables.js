const API_KEY = "b49ad60a137d4678bb0381a62982fc60";
const ENDPOINT = "https://newsapi.org/v2/everything";

let inputElement = document.querySelector(".search__input");
let query = "";

inputElement.addEventListener("onchange", () => {
  query = inputElement.value;
});

export { API_KEY, ENDPOINT };
