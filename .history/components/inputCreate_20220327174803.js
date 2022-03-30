class InputCreate {
  constructor(id, labelText, placeholder) {
    this.$inputDiv = document.createElement("div");
    this.$inputTag = document.createElement("input");
    this.$inputTag.type = "text";
    this.$inputTag.placeholder = placeholder;
    this.$inputTag.setAttribute("id", id);

    this.$inputLine = document.createElement("span");
    this.$inputLine.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[17px]"
    );

    this.$inputLabel = document.createElement("label");
    this.$inputLabel.setAttribute("for", id);
    this.$inputLabel.innerText = "";
  }
  render() {}
}
