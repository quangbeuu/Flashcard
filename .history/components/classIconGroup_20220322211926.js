class ClassIcon {
  constructor() {
    this.$classIconWrap = document.createElement("div");
    this.$classIconWrap.setAttribute(
      "class",
      "w-[38px] h-[38px] text-[20px] flex items-center justify-center rounded-full border border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer"
    );

    this.$classIcon.createElement("ion-icon");
  }

  render() {}
}
