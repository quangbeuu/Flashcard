class TeamItem {
  constructor(srcImage, alt, name, desc) {
    this.$teamItemContainer = document.createElement("div");
    this.$teamItemContainer.setAttribute("class", "p-4 sm:w-1/2 lg:w-1/3");
    this.$teamItemContent = document.createElement("div");
    this.$teamItemContent.setAttribute(
      "class",
      "h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    );

    this.$teamItemImage = document.createElement("img");
    this.$teamItemImage.setAttribute(
      "class",
      "lg:h-72 md:h-48 w-full object-cover object-center"
    );
    this.$teamItemImage.src = srcImage;
    this.$teamItemImage.alt = alt;

    this.$teamItemInfo = document.createElement("div");
    this.$teamItemInfo.setAttribute(
      "class",
      "p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in"
    );

    this.$teamName = document.createElement("h1");
    this.$teamName.setAttribute("class", "text-2xl font-semibold mb-3");
    this.$teamName.innerText = name;

    this.$teamDesc = document.createElement("p");
    this.$teamDesc.setAttribute("class", "leading-relaxed mb-3 text-[16px]");
    this.$teamDesc.innerText = desc;
  }
  render() {
    this.$teamItemContainer.appendChild(this.$teamItemContent);
    this.$teamItemContent.appendChild(this.$teamItemImage);
    this.$teamItemContent.appendChild(this.$teamItemInfo);
    this.$teamItemInfo.appendChild(this.$teamName);
    this.$teamItemInfo.appendChild(this.$teamDesc);
    return this.$teamItemContainer;
  }
}

export default TeamItem;
