import {
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import { db } from "../constants/common.js";

class CardItem {
  constructor(data) {
    console.log(data);
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
  }

  pushcardIdToDocument = () => {
    const cardRef = collection(db, "cards");
    const q = query(cardRef, where("setId", "==", this._setId));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const cardId = change.doc.id;
          const cardDoc = change.doc.data();
          console.log("Card Doc", cardDoc);
          const card = new CardItem(cardDoc, cardId);
          this.$cardList.appendChild(card.render());
        }
      });
    });
  };

  editCard = (e) => {
    const cardId = e.target.parentNode.parentNode.parentNode.id;
  };

  removeCard = (e) => {
    const cardId = e.target.parentNode.parentNode.parentNode.id;
    const tagParent = e.target.parentNode.parentNode.parentNode.parentNode;
    const cardRef = collection(db, "cards");
    deleteDoc(cardRef);
    const q = query(cardRef, where("setId", "==", this._setId));
    onSnapshot(cardRef, (doc) => {
      if (doc.type === "removed") {
        const removeTag = document.getElementById(doc.id);
        tagParent.remove(removeTag);
      }
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
