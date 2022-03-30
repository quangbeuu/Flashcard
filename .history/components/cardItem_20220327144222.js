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
    this.$img.src =
      "https://images.unsplash.com/photo-1648138754704-b85f09b672c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

    // <ion-icon name="pencil-outline"></ion-icon>;
    this.$iconEditWrap = document.createElement("div");
    this.$iconEdit = document.createElement("ion-icon");
  }
  render() {
    return this.$cardWrap;
  }
}

export default CardItem;
