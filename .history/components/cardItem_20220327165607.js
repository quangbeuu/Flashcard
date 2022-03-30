class CardItem {
  constructor(data) {
    this.$cardWrap = document.createElement("div");
    this.$cardWrap.setAttribute(
      "class",
      "flex shadow-card p-[16px] justify-between items-center mt-[18px]"
    );
    this.$cardEndlish = document.createElement("p");
    // this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.setAttribute("class", "text-[16px] w-[60%]");

    this.$cardVn = document.createElement("p");
    // this.$cardVn.innerText = data.vn_mean;
    this.$cardVn.innerText = data.vn_mean;
    this.$cardVn.setAttribute("class", "text-[18px]");

    this.$img = document.createElement("img");
    this.$img.src = data.src;
    this.$img.setAttribute("class", "h-[100px] object-cover");

    this.$cardIconWrap = document.createElement("div");
    this.$cardIconWrap.setAttribute("class", "flex");
    this.$iconEditWrap = document.createElement("div");
    this.$iconEdit = document.createElement("ion-icon");
    this.$iconEdit.setAttribute("name", "pencil-outline");
    this.$iconEdit.setAttribute(
      "class",
      "text-[20px] hover:text-[#ffd852] transition duration-100ms ease-in cursor-pointer"
    );

    this.$iconDeleteWrap = document.createElement("div");
    this.$iconDelete = document.createElement("ion-icon");
    this.$iconDelete.setAttribute("name", "trash-outline");
    this.$iconDelete.setAttribute(
      "class",
      "text-[20px] ml-[12px] hover:text-[#ffd852] transition duration-100ms ease-in cursor-pointer"
    );
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
