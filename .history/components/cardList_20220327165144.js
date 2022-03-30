import CardItem from "./cardItem.js";
import { cards } from "../constants/testCard.js";
class CardList {
  constructor() {
    this.$cardList = document.createElement("div");
  }

  render() {
    cards.forEach((data) => {
      const card = new CardItem(data);
      this.$cardList.appendChild(card.render());
    });

    return this.$cardList;
  }
}

export default CardList;
