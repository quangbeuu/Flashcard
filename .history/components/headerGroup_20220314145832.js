class Header {
  constructor() {
    this.headerContainer = document.createElement("div");
    this.headerContainer.setAttribute(
      "class",
      "max-h-[63px] flex items-center justify-between py-[15px] px-[20px] fixed bg-white z-30 w-full border border-b-[0.0625rem] solid"
    );

    //Left
    this.headerLeft = document.createElement("div");
  }

  render() {}
}

export default Header;
