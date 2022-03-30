class CardItem {
  constructor() {
    this.$cardWrap = document.createElement("div");

    this.$cardEndlish = document.createElement("p");
  }
  render() {
    return this.$cardWrap;
  }
}

export default CardItem;
