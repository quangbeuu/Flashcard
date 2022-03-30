class Dic {
  constructor() {
    this.$dicContainer = document.createElement("div");
    this.$dicContainer.setAttribute(
      "class",
      "bg-[background-color: rgb(255, 255, 255) h-[90vmin]"
    );
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
    this.$speech.innerText = "speech";
    this.$phonetic = document.createElement("p");
    this.$phonetic.innerText = "phonetic";

    this.$wordMeaning = document.createElement("p");
    this.$wordMeaning.innerText = "Meaning";

    this.$wordExample = document.createElement("p");
    this.$wordExample.innerText = "Example";
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

    this.$result.appendChild(this.$wordMeaning);
    this.$result.appendChild(this.$wordExample);
    return this.$dicContainer;
  }
}

const dic = document.getElementById("dic");

const dicHTML = new Dic();

dic.appendChild(dicHTML.render());
