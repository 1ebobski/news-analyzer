import "./index.css";
import NewsApi from "./js/modules/NewsApi.js";
import NewsCard from "./js/components/NewsCard.js";
import NewsCardList from "./js/components/NewsCardList.js";
import SearchInput from "./js/components/SearchInput.js";
import {
  notFoundInnerHTML,
  searchInProgressInnerHTML,
  resultsReadyInnerHTML,
} from "./js/constants/results-inner-htmls.js";
import { API_KEY, ENDPOINT } from "./js/constants/news-api-variables.js";

const searchInputElement = document.querySelector(".search__input");
const searchInput = new SearchInput(searchInputElement);
const searchButton = document.querySelector(".search__button");

const newsApi = new NewsApi({
  baseUrl: ENDPOINT,
  apiKey: API_KEY,
});

const resultsSection = document.createElement("div");
resultsSection.classList.add("results");
const mainElement = document.querySelector(".main");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.insertBefore(resultsSection, mainElement.children[1]);
  resultsSection.innerHTML = searchInProgressInnerHTML;
  let query = searchInput.fetchQuery();
  newsApi
    .getNews(query)
    .then((r) => {
      resultsSection.innerHTML = resultsReadyInnerHTML;
      let showMoreButton = document.querySelector(".results__button");
      const newsContainer = document.querySelector(".news-grid");

      r.query = query;
      sessionStorage.setItem("newsData", JSON.stringify(r));

      let cardList = new NewsCardList(
        newsContainer,
        Object.values(r.articles).map((article) => {
          return new NewsCard({
            title: article.title,
            text: article.description,
            image: article.urlToImage,
            date: article.publishedAt,
            source: article.source.name,
            url: article.url,
          });
        })
      );

      showMoreButton.addEventListener("click", (event) => {
        cardList.loadBunch();
        if (cardList.isFinished()) {
          event.currentTarget.classList.add("results__button_hidden");
        }
      });
    })
    .catch((err) => {
      resultsSection.innerHTML = notFoundInnerHTML;
      console.log("error");
    });
});

// showMoreButton.addEventListener("click");
// window.addEventListener("resize", cardList.getBunchSize());
