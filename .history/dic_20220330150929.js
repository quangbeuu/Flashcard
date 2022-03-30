class Dic {
  constructor() {
    this.$dicContainer = document.createElement("div");
    this.$dicContainer.setAttribute("class");
  }

  render() {
    return this.$dicContainer;
  }
}

const dic = document.getElementById("dic");

const dicHTML = new Dic();

dic.appendChild(dicHTML);
