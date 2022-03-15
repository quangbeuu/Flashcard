class ButtonGroup {
  constructor(content, bgcolor, hovercolor) {
    this.$buttonCreate = document.createElement("button");
    this.$buttonCreate.type = "submit";
    this.$buttonCreate.setAttribute(
      "class",
      `text-[16px] font-medium ml-[18px] px-[12px] py-[6px] bg-[${bgcolor}] rounded-[0.25rem] hover:bg-[${hovercolor}] transition duration-100ms ease-in`
    );
    this.$buttonCreate.innerText = content;
  }

  render() {
    return this.$buttonCreate;
  }
}

export default ButtonGroup;
