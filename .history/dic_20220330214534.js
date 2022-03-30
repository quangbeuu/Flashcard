class Dic {
  constructor() {
    document.body.style.backgroundColor = "azure";
    this.$dicContainer = document.createElement("div");
    this.$dicContainer.setAttribute(
      "class",
      "bg-white h-[90vmin] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[50px] py-[80px] rounded-[10px] shadow-[0 20px 40px rgba(38,33,61,0.2)]"
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
