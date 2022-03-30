class InputCreate {
  constructor(id, labelText, placeholder) {
    this.$inputDiv = document.createElement("div");
    this.$inputDiv.setAttribute("class", "mt-10");
    this.$inputTag = document.createElement("input");
    this.$inputTag.type = "text";
    this.$inputTag.placeholder = placeholder;
    this.$inputTag.setAttribute("id", id);
    this.$inputTag.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[17px]"
    );

    this.$inputLine = document.createElement("span");
    this.$inputLine.setAttribute("class", "block h-[2px] bg-black w-full");

    this.$inputLabel = document.createElement("label");
    this.$inputLabel.setAttribute("for", id);
    this.$inputLabel.innerText = labelText;
    this.$inputLabel.setAttribute(
      "class",
      "block text-[14px] font-semibold uppercase mt-[8px] tracking-[1px]"
    );
  }
  render() {
    this.$inputDiv.appendChild(this.$inputTag);
    this.$inputDiv.appendChild(this.$inputLine);
    this.$inputDiv.appendChild(this.$inputLabel);
    return this.$inputDiv;
  }
}

export default InputCreate;
