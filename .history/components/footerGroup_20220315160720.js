class Footer {
  constructor() {
    this.$footerContainer = document.createElement("footer");
    this.$footerContainer.setAttribute(
      "class",
      "bg-[#4b8063] flex justify-center items-center flex-col"
    );

    this.$footerImageContainer = document.createElement("div");
    this.$footerImageContainer.setAttribute("class", "mt-[50px]");

    this.$footerImageLink = document.createElement("a");
    this.$footerImageLink.href = "#";

    this.$footerImage = document.createElement("img");
    this.$footerImage.src = "../assets/img/logo.png";
    this.$footerImage.alt = "logo";
    this.$footerImage.setAttribute(
      "class",
      "h-[48px] bg-white rounded-full p-[5px]"
    );
  }

  render() {
    this.$footerContainer.appendChild(this.$footerImageContainer);
    this.$footerImageContainer.appendChild(this.$footerImageLink);
    this.$footerImageLink.appendChild(this.$footerImage);

    return this.$footerContainer;
  }
}
