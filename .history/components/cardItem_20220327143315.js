class CardItem {
  constructor(data) {
    this.$cardWrap = document.createElement("div");

    this.$cardEndlish = document.createElement("p");
    // this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.innerText = "Hello(n)";

    this.$cardVn = document.createElement("p");
    this.$cardVn.innerText = data.vn_mean;

    this.$img = document.
  }
  render() {
    return this.$cardWrap;
  }
}

export default CardItem;
