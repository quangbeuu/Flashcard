class CardItem {
  constructor(data) {
    this.$cardWrap = document.createElement("div");
    this.$cardWrap.setAttribute(
      "class",
      "flex shadow-card p-[16px] justify-evenly items-center mt-[18px]"
    );
    this.$cardEndlish = document.createElement("p");
    // this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.innerText = "Hello(n)";
    this.$cardEndlish.setAttribute("class", "text-[16px]");

    this.$cardVn = document.createElement("p");
    // this.$cardVn.innerText = data.vn_mean;
    this.$cardVn.innerText = "Xin chào";
    this.$cardVn.setAttribute("class", "text-[18px]");

    this.$img = document.createElement("img");
    this.$img.src =
      "https://images.unsplash.com/photo-1648138754704-b85f09b672c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    this.$img.setAttribute("class", "h-[100px] object-cover");

    this.$cardIconWrap = document.createElement("div");
    this.$cardIconWrap.setAttribute("class", "flex ml-0");
    this.$iconEditWrap = document.createElement("div");
    this.$iconEdit = document.createElement("ion-icon");
    this.$iconEdit.setAttribute("name", "pencil-outline");

    this.$iconDeleteWrap = document.createElement("div");
    this.$iconDelete = document.createElement("ion-icon");
    this.$iconDelete.setAttribute("name", "trash-outline");
  }
  render() {
    this.$cardWrap.appendChild(this.$cardEndlish);
    this.$cardWrap.appendChild(this.$cardVn);
    this.$cardWrap.appendChild(this.$img);
    this.$cardWrap.appendChild(this.$cardIconWrap);
    this.$cardIconWrap.appendChild(this.$iconEditWrap);
    this.$iconEditWrap.appendChild(this.$iconEdit);
    this.$cardIconWrap.appendChild(this.$iconDeleteWrap);
    this.$iconDeleteWrap.appendChild(this.$iconDelete);
    return this.$cardWrap;
  }
}

export default CardItem;
