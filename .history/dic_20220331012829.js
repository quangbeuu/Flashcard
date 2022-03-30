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
    this.$result.setAttribute("class", "relative");

    this.$noWord = document.createElement("h3");
    this.$noWord.setAttribute(
      "class",
      "mt-[18px] text-[20px] font-bold text-red-400"
    );

    this.$gotoHomePage = document.createElement("a");
    this.$gotoHomePage.setAttribute("class", "relative z-10");
    this.$gotoHomePageIcon = document.createElement("i");
    this.$gotoHomePageIcon.setAttribute("class", "fa fa-arrow-alt-circle-left");
  }

  onClick = () => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    let inpWord = this.$inputWord.value;
    fetch(`${url}${inpWord}`)
      .then((response) => response.json())
      .then((data) => {
        this.$result.innerHTML = `
        <div class="flex justify-between mt-[50px]">
                <h3 class="text-[28px] text-[#19201e]">${inpWord}</h3>
            </div>
            <div class="flex gap-[10px] text-[8d8c8c] mt-[14px] mt-[5px] mb-[20px] mx-0 text-[14px]">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="text-[#5c5c5c]">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="text-[#5c5c5c] italic border-l-[5px] border-l-[#8fb397] pl-[20px] mt-[30px]">
              Example:  ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
        this.$noWord.innerText = ``;
      })
      .catch(() => {
        this.$result.innerHTML = ``;
        this.$noWord.innerText = "Couldn't Fine The Word";
        this.$dicContainer.appendChild(this.$noWord);
      });
  };

  render(container) {
    this.$dicContainer.appendChild(this.$searchBox);
    this.$searchBox.appendChild(this.$inputWord);
    this.$searchBox.appendChild(this.$searchBtn);
    this.$dicContainer.appendChild(this.$result);
    this.$dicContainer.appendChild(this.$gotoHomePage);
    container.appendChild(this.$gotoHomePageIcon);
    return this.$dicContainer;
  }
}

const dic = document.getElementById("dic");

const dicHTML = new Dic();

dic.appendChild(dicHTML.render(dic));
