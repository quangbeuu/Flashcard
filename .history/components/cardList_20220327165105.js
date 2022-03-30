import CardItem from "./cardItem.js";
import { cards } from "../constants/testCard.js";
class CardList {
  constructor() {
    this.$cardList = document.createElement("div");
  }

  render() {
    for (let i = 0; i < 10; i++) {
      const card = new CardItem();
      this.$cardList.appendChild(card.render());
    }
    return this.$cardList;
  }
}

export default CardList;
