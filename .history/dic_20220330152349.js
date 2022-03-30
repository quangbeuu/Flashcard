class Dic {
  constructor() {
    this.$dicContainer = document.createElement("div");
    // this.$dicContainer.setAttribute("class");
    this.$searchBox = document.createElement("div");
    this.$inputWord = document.createElement("input");
    this.$inputWord.type = "text";
    this.$inputWord.placeholder = "Type the word here...";

    this.$searchBtn = document.createElement("button");
    this.$searchBtn.innerText = "Search";
  }

  render() {
    this.$dicContainer.appendChild(this.$searchBox);
    this.$searchBox.appendChild(this.$inputWord);
    return this.$dicContainer;
  }
}

const dic = document.getElementById("dic");

const dicHTML = new Dic();

dic.appendChild(dicHTML.render());
