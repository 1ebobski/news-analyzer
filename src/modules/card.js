export default class Card {
  constructor() {
    // this.title = title;
    // this.text = text;
    // this.image = image;
    // this.date = date;
    // this.source = source;

    this.cardElement = this.createElement(title, text, image, date, source);
    this.cardElement.addEventListener("click", this.openArticle);
  }

  createElement(title, text, image, date, source) {
    let cardElement = document.createElement("div");
    cardElement.classList.add("article-card");
    cardElement.innerHTML = `<time class='article-card__date' datetime='2019-08-02 20:00'>${date}</time>
                            <h3 class='article-card__title'>${title}</h3>
                            <p class='article-card__paragraph'>${text}</p>
                            <a class='article-card__source' href='${source}'>${source}</a>`;

    cardElement.style.backgroundImage = `url(${image})`;

    return cardElement;
  }

  openArticle() {
    window.open(source, "_blank");
  }
}
