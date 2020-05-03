import { getLastNDays } from "../utils/days-generator.js";

export default class Statistics {
  constructor(container, newsDataString) {
    this.container = container;
    this.newsData = JSON.parse(newsDataString);

    this.axisElement = document.querySelector(".analytics__news-axis");

    this.graphData = this.composeGraphData();
    this.barMaximum = Math.max(...this.graphData.map((day) => day.mentions));
    this.graphElement = this.createGraphElement();

    this.totalNewsElements = document.querySelectorAll(
      ".request-data__paragraph_bold"
    );
    this.queryElement = document.querySelector(".request-data__title");
  }

  composeGraphData() {
    let graphData = getLastNDays(7);
    graphData.forEach((day) => {
      day.mentions = this.newsData.articles.filter((article) => {
        return new Date(article.publishedAt).getDate() === day.date;
      }).length;
    });

    return graphData;
  }

  createGraphElement() {
    let analyticsPlotElement = document.createElement("div");
    analyticsPlotElement.classList.add("analytics__plot");

    let barWidthCoeff = (this.axisElement.clientWidth - 104) / this.barMaximum;

    analyticsPlotElement.innerHTML = this.graphData
      .map(
        (bar) => `<span class="analytics__date" >${bar.date}, ${
          bar.weekDay
        }</span
    ><div class="analytics__value" style="width: ${
      barWidthCoeff * bar.mentions
    }px">${bar.mentions}</div
    >`
      )
      .join("");

    return analyticsPlotElement;
  }

  render() {
    this.totalNewsElements[0].innerHTML = this.newsData.totalResults;
    this.container.insertBefore(this.graphElement, this.container.children[6]);
    this.queryElement.innerHTML = `Вы спросили: "${this.newsData.query}"`;
  }
}
