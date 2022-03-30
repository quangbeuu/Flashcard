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

    this.$result = document.createElement("div");

    // Result Box
    this.$word = document.createElement("div");
    this.$wordTilte = document.createElement("h3");
    this.$wordTilte.innerText = "Hello";

    this.$detail = document.createElement("div");
    this.$speech = document.createElement("p");
    this.$speech.innerText = "halo";
    this.$phonetic = document.createElement("p");
    this.$phonetic.innerText = "halllo";
  }

  render() {
    this.$dicContainer.appendChild(this.$searchBox);
    this.$searchBox.appendChild(this.$inputWord);
    this.$searchBox.appendChild(this.$searchBtn);
    this.$dicContainer.appendChild(this.$result);
    this.$result.appendChild(this.$word);
    this.$word.appendChild(this.$wordTilte);
    this.$result.appendChild(this.$detail);
    this.$detail.appendChild(this.$speech);
    this.$detail.appendChild(this.$phonetic);
    return this.$dicContainer;
  }
}

const dic = document.getElementById("dic");

const dicHTML = new Dic();

dic.appendChild(dicHTML.render());
