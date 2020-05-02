export default class NewsCardList {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
    this.bunchSize = 3;

    this.render();
  }

  // _setHandlers() {}

  getBunchSize() {
    if (window.innerWidth > 767) {
      this.bunchSize = 3;
    } else {
      if (window.innerWidth > 549) {
        this.bunchSize = 2;
      } else {
        this.bunchSize = 1;
      }
    }

    console.log(this.bunchSize);
  }

  loadBunch = () => {
    console.log(this.cards);
    this.cards
      .splice(0, this.bunchSize)
      .forEach((card) => this.container.appendChild(card.cardElement));
  };

  render() {
    this.container.innerHTML = "";
    this.loadBunch();
  }
}