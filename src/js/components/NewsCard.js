import { dateConverter } from "../utils/date-converter.js";

export default class NewsCard {
  constructor(props) {
    this.title = props.title;
    this.text = props.text;
    this.image = props.image;
    this.date = props.date;
    this.source = props.source;
    this.url = props.url;

    this.cardElement = this.createElement(
      this.title,
      this.text,
      this.image,
      this.date,
      this.source,
      this.url
    );
    this.cardElement.addEventListener("click", this.openArticle);
  }

  createElement() {
    let cardElement = document.createElement("a");
    cardElement.href = this.url;
    cardElement.target = "_blank";
    cardElement.classList.add("article-card");
    cardElement.innerHTML = `<time class='article-card__date' datetime='2019-08-02 20:00'>${dateConverter(
      this.date
    )}</time>
                            <h3 class='article-card__title'>${this.title}</h3>
                            <p class='article-card__paragraph'>${this.text}</p>
                            <span class='article-card__source' >${
                              this.source
                            }</span>`;

    cardElement.style.backgroundImage = `url(${this.image})`;

    return cardElement;
  }

  // openArticle() {
  //   let win = window.open();
  //   console.log(this.url);
  //   win.document.write("<img src='" + this.url + "'/>");
  // }
}
