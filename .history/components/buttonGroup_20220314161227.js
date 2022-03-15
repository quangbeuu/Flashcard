class Button {
  constructor() {
    this.$buttonCreate = document.createElement("button");
    this.$buttonCreate.type = "submit";
    this.$buttonCreate.setAttribute(
      "text-[16px] font-medium ml-[18px] px-[12px] py-[6px] bg-[#8fb397] text-white rounded-[0.25rem] hover:bg-[#4b8063] transition duration-100ms ease-in"
    );
    this.$buttonCreate.innerText = "Create";
  }

  render() {
    return this.$buttonCreate;
  }
}
