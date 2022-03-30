class Dic {
  constructor() {
    document.body.style.backgroundColor = "azure";
    this.$dicContainer = document.createElement("div");
    this.$dicContainer.setAttribute(
      "class",
      "bg-white w-[90vmin] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[50px] py-[80px] rounded-[10px] dic-shadow"
    );
    this.$searchBox = document.createElement("div");
    this.$searchBox.setAttribute("class", "w-full flex justify-between");
    this.$inputWord = document.createElement("input");
    this.$inputWord.type = "text";
    this.$inputWord.placeholder = "Type the word here...";
    this.$inputWord.setAttribute(
      "class",
      "p-[5px] w-[70%] text-[16px] outline-none border-b-[3px] solid border-b-[#8fb397]"
    );

    this.$searchBtn = document.createElement("button");
    this.$searchBtn.innerText = "Search";
    this.$searchBtn.setAttribute(
      "class",
      "py-[15px] px-0 w-[25%] bg-[#8fb397] hover:bg-[#4b8063] border-none outline-none text-white rounded-[5px]"
    );
    this.$searchBtn.addEventListener("click", this.onClick);
    this.$resultWrap = document.createElement("div");
    this.$result = document.createElement("div");
    this.$result.setAttribute("class", "hidden relative");

    // Result Box
    this.$word = document.createElement("div");
    this.$word.setAttribute("class", "flex - justify-between mt-[50px]");
    this.$wordTilte = document.createElement("h3");
    this.$wordTilte.setAttribute("class", "text-[28px] text-[#19201e]");
    this.$wordTilte.innerText = "Hello";

    this.$detail = document.createElement("div");
    this.$detail.setAttribute(
      "class",
      "flex gap-[10px] text-[8d8c8c] mt-[14px] mt-[5px] mb-[20px] mx-0 text-[14px]"
    );
    this.$speech = document.createElement("p");
    this.$speech.innerText = "speech";
    this.$phonetic = document.createElement("p");
    this.$phonetic.innerText = "phonetic";

    this.$wordMeaning = document.createElement("p");
    this.$wordMeaning.innerText = "Meaning";
    this.$wordMeaning.setAttribute("class", "text-[#5c5c5c]");

    this.$wordExample = document.createElement("p");
    this.$wordExample.innerText = "Example";
    this.$wordExample.setAttribute(
      "class",
      "text-[#5c5c5c] italic border-l-[5px] border-l-[#8fb397] pl-[20px] mt-[30px]"
    );
  }

  onClick = () => {
    console.log("meo meo");
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    let inpWord = this.$inputWord.value;
    fetch(`${url}${inpWord}`)
      .then((response) => response.json())
      .then((data) => {
        this.$resultWrap.appendChild(this.$result);
      })
      .catch(() => {
        // this.$result.
      });
  };

  render() {
    this.$dicContainer.appendChild(this.$searchBox);
    this.$searchBox.appendChild(this.$inputWord);
    this.$searchBox.appendChild(this.$searchBtn);
    this.$dicContainer.appendChild(this.$resultWrap);
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
