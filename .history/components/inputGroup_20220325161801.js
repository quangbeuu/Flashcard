class InputGroup {
  constructor(iconType, idInput, labelText, inputType) {
    this.$inputContainer = document.createElement("div");
    this.$inputContainer.setAttribute(
      "class",
      "flex px-[20px] py-[14px] bg-[#f3f3f3] rounded-xl items-center mt-[40px] relative z-10 border border-[2px] solid border-transparent"
    );

    this.$flexDiv = document.createElement("div");
    this.$flexDiv.setAttribute("class", "flex");

    this.$loginIcon = document.createElement("ion-icon");
    this.$loginIcon.setAttribute("name", iconType);
    this.$loginIcon.setAttribute("class", "w-[30px] h-[52px]");

    this.$inputWrap = document.createElement("div");
    this.$inputWrap.setAttribute("class", "ml-[20px]");

    this.$loginLabel = document.createElement("label");
    this.$loginLabel.setAttribute("for", idInput);
    this.$loginLabel.setAttribute("class", "block mb-[4px] text-lg");
    this.$loginLabel.innerText = labelText;

    this.$inputItem = document.createElement("input");
    this.$inputItem.type = inputType;
    this.$inputItem.setAttribute("id", idInput);
    this.$inputItem.setAttribute(
      "class",
      "outline-0 bg-[#f3f3f3] text-lg block"
    );
  }

  getValue() {
    return this.$inputItem.value;
  }

  render(eyeicon) {
    this.$inputContainer.appendChild(this.$flexDiv);
    this.$flexDiv.appendChild(this.$loginIcon);
    this.$flexDiv.appendChild(this.$inputWrap);
    this.$inputWrap.appendChild(this.$loginLabel);
    this.$inputWrap.appendChild(this.$inputItem);
    if (eyeicon) {
      this.$inputContainer.appendChild(eyeicon);
    }
    return this.$inputContainer;
  }
}

export default InputGroup;
