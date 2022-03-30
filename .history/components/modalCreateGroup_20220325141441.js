class ModalCreate {
  constructor() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center invisible opacity-0 transition ease-in duration-200"
    );

    this.$modalContent = document.createElement("div");
  }

  render() {
    return this.$modalContainer;
  }
}
