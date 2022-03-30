class CardItem {
  constructor(data) {
    this.$cardWrap = document.createElement("div");

    this.$cardEndlish = document.createElement("p");
    // this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.innerText = "Hello(n)";

    this.$cardVn = document.createElement("p");
    // this.$cardVn.innerText = data.vn_mean;
    this.$cardVn.innerText = "Xin chào";

    this.$img = document.createElement("img");
    this.$img.src = "";
  }
  render() {
    return this.$cardWrap;
  }
}

export default CardItem;
