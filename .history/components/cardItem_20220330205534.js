import {
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
  collection,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import ModalCreate from "./modalCreateGroup.js";
import InputCreate from "./inputCreate.js";

import { db } from "../constants/common.js";

class CardItem {
  constructor(data, cardId) {
    const searchSetUrl = new URLSearchParams(window.location.search);
    this._setId = searchSetUrl.get("setId");
    this._cardId = cardId;
    this.$cardWrap = document.createElement("div");
    this.$cardWrap.setAttribute(
      "class",
      "flex shadow-card p-[16px] justify-between items-center mt-[18px]"
    );
    this.$cardEndlish = document.createElement("p");
    // this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.innerText = data.en_mean;
    this.$cardEndlish.setAttribute("class", "text-[16px] w-[25%] ml-[16px]");

    this.$cardVn = document.createElement("p");
    // this.$cardVn.innerText = data.vn_mean;
    this.$cardVn.innerText = data.vn_mean;
    this.$cardVn.setAttribute("class", "text-[18px] w-[25%]");

    if (data.srcImage) {
      this.$img = document.createElement("img");
      this.$img.src = data.srcImage;
      this.$img.setAttribute("class", "h-[100px] object-cover");
    }

    this.$cardIconWrap = document.createElement("div");
    this.$cardIconWrap.setAttribute("class", "flex mr-[18px]");
    this.$iconEditWrap = document.createElement("div");
    this.$iconEditWrap.addEventListener("click", this.editCard);
    this.$iconEditWrap.setAttribute("class", "cursor-pointer");
    this.$iconEdit = document.createElement("ion-icon");
    this.$iconEdit.setAttribute("name", "pencil-outline");
    this.$iconEdit.setAttribute(
      "class",
      "text-[20px] hover:text-[#ffd852] transition duration-100ms ease-in  pointer-events-none"
    );

    this.$iconDeleteWrap = document.createElement("div");
    this.$iconDeleteWrap.addEventListener("click", this.removeCard);
    this.$iconDeleteWrap.setAttribute("class", "cursor-pointer");
    this.$iconDelete = document.createElement("ion-icon");
    this.$iconDelete.setAttribute("name", "trash-outline");
    this.$iconDelete.setAttribute(
      "class",
      "text-[20px] ml-[12px] hover:text-[#ffd852] transition duration-100ms ease-in pointer-events-none"
    );

    this.$updateModal = new ModalCreate("Update card");
    this.$enInput = new InputCreate(
      "updateterm",
      "Update term",
      "Enter a new term"
    );

    this.$vnInput = new InputCreate(
      "updatedef",
      "Update a new definition",
      "Enter a new definition"
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
    this.pushcardIdToCollection();
  }

  pushcardIdToCollection = () => {
    const cardRef = doc(db, "cards", this._cardId);
    updateDoc(cardRef, {
      cardId: this._cardId,
    });
  };

  editCard = (e) => {
    const cardId = e.target.parentNode.parentNode.parentNode.id;
    console.log(cardId);
  };

  removeCard = async (e) => {
    const cardId = e.target.parentNode.parentNode.id;
    // console.log(cardId);
    const cardRef = doc(db, "cards", cardId);
    deleteDoc(cardRef);
    const cardRefs = collection(db, "cards");
    const tagParent = e.target.parentNode.parentNode.parentNode;
    const removeTag = document.getElementById(cardId);

    const q = query(cardRefs, where("setId", "==", this._setId));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          console.log("Hello");
          // tagParent.removeChild(removeTag);
        }
      });
    });
  };

  render() {
    this.$cardWrap.appendChild(this.$cardEndlish);
    this.$cardWrap.appendChild(this.$cardVn);
    if (this.$img) {
      this.$cardWrap.appendChild(this.$img);
    }
    this.$cardWrap.appendChild(this.$cardIconWrap);
    this.$cardIconWrap.appendChild(this.$iconEditWrap);
    this.$iconEditWrap.appendChild(this.$iconEdit);
    this.$cardIconWrap.appendChild(this.$iconDeleteWrap);
    this.$iconDeleteWrap.appendChild(this.$iconDelete);
    return this.$cardWrap;
  }
}

export default CardItem;
