class MessageError {
  constructor() {
    this.$errorContainer = document.createElement("div");
    this.$errorContainer.setAttribute(
      "class",
      "relative w-full z-0 translate-y-[-100%]"
    );

    this.$errorContent = document.createElement("div");
    this.$errorContent.setAttribute(
      "class",
      "pt-[16px] pr-[8px] pb-[4px] pl-[16px] text-[16px] text-white rounded-bl-xl rounded-br-xl bg-[#ff805d] mt-[-1rem] absolute w-full pointer-events-none"
    );
    this.$errorContent.innerText = errorText;
  }
}
