import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import { storage, auth, db } from "../constants/common.js";
import Header from "../components/headerGroup.js";
import ButtonGroup from "../components/buttonGroup.js";
import ModalCreate from "../components/modalCreateGroup.js";
import CardList from "../components/cardList.js";
import InputCreate from "../components/inputCreate.js";
class CreateSet {
  _imageUrl;
  constructor(data, setid) {
    this._setId = setid;
    this._classId = data.classId;
    this.$createSetPageContainer = document.createElement("div");
    const setPageUrl = new URLSearchParams(window.location.search);
    this.setId = setPageUrl.get("setId");
    // Header
    this.$header = new Header();

    // Content

    this.$createSetContentWrap = document.createElement("div");
    this.$createSetContentWrap.setAttribute("class", "p-[64px]");

    // Content Top
    this.$createSetContentTop = document.createElement("div");
    this.$createSetContentTop.setAttribute(
      "class",
      "mt-10 flex justify-between"
    );
    this.$createSetContentTitle = document.createElement("h1");
    this.$createSetContentTitle.innerText = "Create a new set";
    this.$createSetContentTitle.setAttribute(
      "class",
      "text-[20px] font-bold tracking-[1px]"
    );

    this.$createSetContentButton = new ButtonGroup(
      "Create",
      "#8fb397",
      "#4b8063"
    );
    this.$createSetContentButton.$buttonCreate.classList.add("text-white");
    this.$createSetContentButton.$buttonCreate.classList.add("px-[18px]");

    // Set Name
    this.$setName = document.createElement("h1");
    this.$setName.setAttribute("class", "text-[30px] font-bold");
    this.$setName.innerText = "Your set name";

    // Create card button
    this.$createCardButton = new ButtonGroup(
      "Create a new card",
      "#8fb397",
      "#4b8063"
    );
    this.$createCardButton.$buttonCreate.classList.remove("ml-[18px]");
    this.$createCardButton.$buttonCreate.classList.add("mt-[18px]");
    this.$createCardButton.$buttonCreate.classList.add("text-white");
    this.$createCardButton.$buttonCreate.addEventListener(
      "click",
      this.showModal
    );
    // ModalCreate

    this.$modalCreateCard = new ModalCreate("Create a new card");
    this.$defEnInput = new InputCreate("term", "Term", "Enter term");
    this.$defVnInput = new InputCreate(
      "definition",
      "Definition",
      "Enter definition"
    );
    this.$inputFile = document.createElement("input");
    this.$inputFile.type = "file";
    this.$inputFile.setAttribute(
      "class",
      "mt-[18px] file:bg-[#8fb397] file:hover:bg-[#4b8063] file:border-none file:outline-none file:text-white file:px-[18px] file:py-[8px] file:rounded-full"
    );
    this.$inputFile.addEventListener("change", this.getImageUrl);
    this.$inputFileLabel = document.createElement("label");
    this.$inputFileLabel.innerText = "Upload your own image";
    this.$inputFileLabel.setAttribute(
      "class",
      "block text-[14px] font-semibold uppercase mt-[8px] tracking-[1px]"
    );

    this.$createCard = document.createElement("button");
    this.$createCard.setAttribute(
      "class",
      "mt-[18px] text-center p-6 bg-[#8fb397] w-full text-[18px] font-bold text-white hover:bg-[#4b8063] transition linear duration-100 cursor-pointer"
    );
    this.$createCard.innerText = "Create your card";

    this.$createCard.addEventListener("click", this.pushDataToFireBase);
    // WordList
    this.$wordListWrap = document.createElement("div");
    this.$wordListWrap.setAttribute("class", "mt-20");
    this.$wordListHeader = document.createElement("h1");
    this.$wordListHeader.setAttribute("class", "text-[20px] font-bold");
    this.$wordListHeader.innerText = `Terms in this set (0)`;
    this.$wordListSubHeader = document.createElement("h2");
    this.$wordListSubHeader.setAttribute("class", "text-[16px] font-normal");
    this.$wordListSubHeader.innerText =
      "You've begun learning these terms. Keep up the good work";

    // cardList
    this.$cardList = new CardList();
    this.getSetById();
  }

  pushSetIdToCollection() {
    const setRef = doc(db, "setsdoc", this.setId);
    updateDoc(setRef, {
      setId: this.setId,
    });
  }
  getImageUrl = (e) => {
    // Lấy link ảnh
    const file = e.target.files[0];
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        alert(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            this._imageUrl = url;
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    );
  };
  showModal = () => {
    this.$modalCreateCard.showModal();
  };

  pushDataToFireBase = async (e) => {
    const en_mean = this.$defEnInput.getValue();
    const vn_mean = this.$defVnInput.getValue();
    console.log(this._imageUrl);
    try {
      if (this._imageUrl) {
        if (en_mean.trim().length !== 0 && vn_mean.trim().length !== 0) {
          const cardRef = collection(db, "cards");
          const newCard = {
            en_mean: en_mean,
            vn_mean: vn_mean,
            userCreate: auth.currentUser.email,
            classId: this._classId,
            setId: this._setId,
            createdAt: new Date().valueOf(),
            srcImage: this._imageUrl,
          };
          addDoc(cardRef, newCard);
          this.$defEnInput.$inputTag.value = "";
          this.$defVnInput.$inputTag.value = "";
          this.$modalCreateCard.$modalContainer.classList.add("hidden");
          console.log(newCard);
        }
      } else {
        if (en_mean.trim().length !== 0 && vn_mean.trim().length !== 0) {
          const cardRef = collection(db, "cards");
          const newCard = {
            en_mean: en_mean,
            vn_mean: vn_mean,
            userCreate: auth.currentUser.email,
            classId: this._classId,
            setId: this._setId,
            createdAt: new Date().valueOf(),
            srcImage: "",
          };
          addDoc(cardRef, newCard);
          this.$defEnInput.$inputTag.value = "";
          this.$defVnInput.$inputTag.value = "";
          this.$modalCreateCard.$modalContainer.classList.add("hidden");
          console.log(newCard);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  getSetById = async () => {
    const setRef = doc(db, "setsdoc", this._setId);
    const docSnap = await getDoc(setRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("data", data);
      this.$setName.innerText = data.setName;
    } else {
      console.log(err.message);
    }

    this.pushSetIdToCollection();
  };

  render(container) {
    this.$createSetPageContainer.appendChild(this.$header.render(container));
    this.$createSetPageContainer.appendChild(this.$createSetContentWrap);
    // Content Top
    this.$createSetContentWrap.appendChild(this.$createSetContentTop);
    this.$createSetContentTop.appendChild(this.$createSetContentTitle);
    this.$createSetContentTop.appendChild(
      this.$createSetContentButton.render()
    );
    // Create Input
    this.$createSetContentWrap.appendChild(this.$setName);

    this.$createSetContentWrap.appendChild(this.$createCardButton.render());
    //Word List
    this.$createSetContentWrap.appendChild(this.$wordListWrap);
    this.$wordListWrap.appendChild(this.$wordListHeader);
    this.$wordListWrap.appendChild(this.$wordListSubHeader);

    //cardList
    this.$wordListWrap.appendChild(this.$cardList.render());

    // ModalCreate
    this.$modalCreateCard.$modalInfroWrap.appendChild(
      this.$defEnInput.render()
    );
    this.$modalCreateCard.$modalInfroWrap.appendChild(
      this.$defVnInput.render()
    );
    this.$modalCreateCard.$modalInfroWrap.appendChild(this.$inputFile);
    this.$modalCreateCard.$modalInfroWrap.appendChild(this.$inputFileLabel);
    this.$modalCreateCard.$modalInfroWrap.appendChild(this.$createCard);

    container.appendChild(this.$modalCreateCard.render());
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
