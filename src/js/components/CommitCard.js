import { dateConverter } from "../utils/date-converter.js";

export default class CommitCard {
  constructor(props) {
    this.date = dateConverter(props.date);
    this.author = props.author;
    this.email = props.email;
    this.avatar = props.avatar;
    this.text = props.text;
    this.link = props.link;

    this.cardElement = this.createElement();
  }

  createElement() {
    let cardElement = document.createElement("a");
    cardElement.href = this.link;

    cardElement.classList.add("commit");
    cardElement.innerHTML = `<span class="commit__date">${this.date}</span>
      <div class="commit__container">
        <h3 class="commit__name">${this.author}</h3>
        <span class="commit__email">${this.email}</span>
        <img
          src=${this.avatar}
          class="commit__photo"
          alt=""
        />
      </div>
      <p class="commit__description"
        >${this.text}</p
      >`;

    return cardElement;
  }
}
