import CardItems from "./cardItem";
class CardList {
  constructor() {
    this.$cardList = document.createElement("div");
  }

  render() {
    return this.$cardList;
  }
}

export default CardList;
