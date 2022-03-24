import Header from "../components/headerGroup.js";
import SectionItem from "../components/sectionItem.js";
import Footer from "../components/footerGroup.js";
import Login from "../page/Login.js";
import app from "../index.js";

class Main {
  constructor() {
    this.$mainContainer = document.createElement("div");
    // Header
    this.$header = new Header();
    this.$header.$buttonCreate.$buttonCreate.addEventListener(
      "click",
      this.showModal
    );

    // Poster
    this.$poster = document.createElement("div");
    this.$poster.setAttribute("class", "w-full bg-[#4b8063] p-[64px]");

    this.$posterContent = document.createElement("div");
    this.$posterContent.setAttribute(
      "class",
      "mt-[64px] w-full h-full relative bg-radient z-2"
    );

    // Poster-image
    this.$posterImage = document.createElement("img");
    this.$posterImage.setAttribute(
      "class",
      "h-[640px] w-[1300px] rounded-[1.5rem] object-cover block"
    );
    this.$posterImage.src = "../assets/img/poster.jpg";
    this.$posterImage.alt = "logo-poster";
    //Poster-title
    this.$posterTitleContainer = document.createElement("div");
    this.$posterTitleContainer.setAttribute(
      "class",
      "absolute bottom-0 z-20 flex justify-between w-full items-center"
    );
    this.$posterTitleContent = document.createElement("div");
    this.$posterTitleContent.setAttribute(
      "class",
      "text-white max-w-[30rem] m-[48px]"
    );

    this.$posterMainTitle = document.createElement("h1");
    this.$posterMainTitle.setAttribute(
      "class",
      "text-[44px] font-bold mb-[16px]"
    );
    this.$posterMainTitle.innerText = "Learn for your future. MindCard.";

    this.$posterSubTitle = document.createElement("p");
    this.$posterSubTitle.setAttribute("class", "text-[20px] font-normal");
    this.$posterSubTitle.innerText =
      "With our ever-effective flashcards, eye-catching mindmap system, get a suite of science-backed study tools at your fingertips.";
    // Poster button
    this.$posterButton = document.createElement("button");
    this.$posterButton.setAttribute(
      "class",
      "text-[16px] text-white font-semibold px-[32px] py-[20px] bg-[#8fb397] rounded-lg hover:bg-[#4b8063] m-[48px] transition duration-100 ease-in"
    );
    this.$posterButton.innerText = "Get started";
    // Why
    this.$whyContainer = document.createElement("section");
    this.$whyContainer.setAttribute("class", "px-[162px] mb-[100px]");
    this.$whyTitleContainer = document.createElement("div");
    this.$whyTitle = document.createElement("h1");
    this.$whyTitle.setAttribute(
      "class",
      "text-[44px] text-[#303545] font-bold w-full text-center pt-[100px]"
    );
    this.$whyTitle.innerText = "Why should study with MindCard?";
    // Yellow-line
    this.$yellowLine = document.createElement("p");
    this.$yellowLine.setAttribute("class", "yellow-line");

    // Section Content
    this.$sectionNoPaper = new SectionItem(
      "../assets/img/nopaper.jpg",
      "Goodbye Paper",
      "Goodbye Paper",
      "Making paper flashcards is a time-consuming exercise that, in the end, will be more oriented on the textual part rather than on the visual one. Also, using a standard set of supplied flashcards will likely not fit the personal ways students learn."
    );
    this.$sectionLearn = new SectionItem(
      "../assets/img/girlgreen.jpg",
      "Make learning into a game",
      "Make learning into a game",
      "Our brain needs to be challenged in order to make learning more interesting and, as a consequence, more effective. This is a simple, yet powerful, technique and we promise that you will enjoy its effectiveness on the day of the exam!"
    );

    this.$sectionSaveTime = new SectionItem(
      "../assets/img/savetime.jpg",
      "Save time",
      "Save time",
      "You can make in less than 5 minutes on our flashcard maker app? Give it a try, you won’t be disappointed!"
    );

    this.$sectionEveryWhere = new SectionItem(
      "../assets/img/girlblue.jpg",
      "Study Everywhere You Want",
      "Study Everywhere You Want",
      "MindCard will be with you anywhere you go. On your laptop at the bar, on your phone in the tube, there are no restrictions. Revise your old flashcard sets while taking a coffee at the bar, make some cool new ones in the library while commuting in the tube, technology puts no limits to learning!"
    );
    // Slider
    this.$sliderContainer = document.createElement("section");
    this.$sliderContainer.setAttribute("class", "px-[162px] mb-[100px]");

    this.$sliderTitleContainer = document.createElement("div");
    this.$sliderTitle = document.createElement("h1");
    this.$sliderTitle.setAttribute(
      "class",
      "text-[44px] text-[#303545] font-bold w-full text-center"
    );
    this.$sliderTitle.innerText = "User reviews!!!";

    this.$sliderList = document.createElement("div");
    this.$sliderList.setAttribute("class", "mt-[60px]");
    this.$sliderItem = document.createElement("div");
    this.$sliderItem.setAttribute("class", "text-center");
    this.$sliderItemContent = document.createElement("h3");
    this.$sliderItemContent.setAttribute(
      "class",
      "text-[30px] font-bold quote-custom"
    );
    this.$sliderItemContent.innerText =
      "Quizlet gives me an easy way to revise, which I can do on the go with the Quizlet app!";
    this.$sliderItemAuthor = document.createElement("p");
    this.$sliderItemAuthor.setAttribute(
      "class",
      "text-[#a9a9a9] text-semibold text-[16px] mt-[24px]"
    );
    this.$sliderItemAuthor.innerText = "- kkubina0110, age 20";

    // Get start
    this.$getStartContainer = document.createElement("section");
    this.$getStartContainer.setAttribute("class", "text-center mb-[100px]");
    this.$getStartContent = document.createElement("p");
    this.$getStartContent.setAttribute("class", "text-[24px] font-bold");
    this.$getStartContent.innerText = "Ready to start getting better results?";

    this.$getStartButton = document.createElement("button");
    this.$getStartButton.setAttribute(
      "class",
      "text-[16px] text-white font-semibold px-[32px] py-[20px] bg-[#8fb397] rounded-lg hover:bg-[#4b8063] mt-[20px] transition duration-100ms ease-in"
    );
    this.$getStartButton.innerText = "Get started";

    // Footer
    this.$footer = new Footer();
  }

  showModal = (e) => {
    e.preventDefault();
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center visible opacity-100 transition ease-in duration-200"
    );
  };

  hideModal = (e) => {
    e.preventDefault();
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center invisible opacity-0 transition ease-in duration-200"
    );
  };

  render(container) {
    // Header
    this.$mainContainer.appendChild(this.$header.render());
    // Poster
    this.$mainContainer.appendChild(this.$poster);
    this.$poster.appendChild(this.$posterContent);
    this.$posterContent.appendChild(this.$posterImage);
    this.$posterContent.appendChild(this.$posterTitleContainer);
    this.$posterTitleContainer.appendChild(this.$posterTitleContent);
    this.$posterTitleContent.appendChild(this.$posterMainTitle);
    this.$posterTitleContent.appendChild(this.$posterSubTitle);
    this.$posterTitleContainer.appendChild(this.$posterButton);
    // Why
    this.$mainContainer.appendChild(this.$whyContainer);
    this.$whyContainer.appendChild(this.$whyTitleContainer);
    this.$whyTitleContainer.appendChild(this.$whyTitle);
    this.$whyTitleContainer.appendChild(this.$yellowLine);

    // Section Content
    this.$whyContainer.appendChild(this.$sectionNoPaper.render("left"));
    this.$whyContainer.appendChild(this.$sectionLearn.render("right"));
    this.$whyContainer.appendChild(this.$sectionSaveTime.render("left"));
    this.$whyContainer.appendChild(this.$sectionEveryWhere.render("right"));

    // Slider
    this.$mainContainer.appendChild(this.$sliderContainer);
    this.$sliderContainer.appendChild(this.$sliderTitleContainer);
    this.$sliderTitleContainer.appendChild(this.$sliderTitle);
    this.$sliderTitleContainer.appendChild(this.$yellowLine);

    this.$sliderContainer.appendChild(this.$sliderList);
    this.$sliderList.appendChild(this.$sliderItem);
    this.$sliderItem.appendChild(this.$sliderItemContent);
    this.$sliderItem.appendChild(this.$sliderItemAuthor);
    // Get Started
    this.$mainContainer.appendChild(this.$getStartContainer);
    this.$getStartContainer.appendChild(this.$getStartContent);
    this.$getStartContainer.appendChild(this.$getStartButton);

    // Footer
    this.$mainContainer.appendChild(this.$footer.render());
    // return this.$mainContainer;

    // Create class

    container.appendChild(this.$mainContainer);
  }
}

export default Main;
