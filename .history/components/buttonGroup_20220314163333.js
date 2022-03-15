class ButtonGroup {
  constructor(content, bgcolor) {
    this.$buttonCreate = document.createElement("button");
    this.$buttonCreate.type = "submit";
    this.$buttonCreate.setAttribute(
      "class",
      `text-[16px] font-medium ml-[18px] px-[12px] py-[6px] bg-[${bgcolor}] text-white rounded-[0.25rem] hover:bg-[#4b8063] transition duration-100ms ease-in`
    );
    this.$buttonCreate.innerText = content;
  }

  render() {
    return this.$buttonCreate;
  }
}

export default ButtonGroup;
