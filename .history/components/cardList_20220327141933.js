import CardItem from "./cardItem.js";
class CardList {
  constructor() {
    this.$cardList = document.createElement("div");
  }

  render() {
    return this.$cardList;
  }
}

export default CardList;
