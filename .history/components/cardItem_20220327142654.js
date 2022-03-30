class CardItem {
  constructor(data) {
    this.$cardWrap = document.createElement("div");

    this.$cardEndlish = document.createElement("p");
    this.$cardEndlish.innerText = data.en_mean;
  }
  render() {
    return this.$cardWrap;
  }
}

export default CardItem;
