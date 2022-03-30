class Dic {
  constructor() {
    this.$dicContainer = document.createElement("div");
    // this.$dicContainer.setAttribute("class");
    this.$searchBox = document.createElement("div");
  }

  render() {
    this.$dicContainer.appendChild(this.$searchBox);
    return this.$dicContainer;
  }
}

const dic = document.getElementById("dic");

const dicHTML = new Dic();

dic.appendChild(dicHTML);
