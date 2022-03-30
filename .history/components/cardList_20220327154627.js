import CardItem from "./cardItem.js";
class CardList {
  constructor() {
    this.$cardList = document.createElement("div");
  }

  render() {
    for (let i = 0; i < 10; i++) {
      let card = new CardItem();
    }
    return this.$cardList;
  }
}

export default CardList;
