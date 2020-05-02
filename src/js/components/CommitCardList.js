export default class CommitCardList {
  constructor(cards) {
    this.cards = cards;
  }

  fetchCommits() {
    return this.cards.map((card) => card.cardElement);
  }
}
