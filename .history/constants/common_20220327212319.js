import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js";
export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage();
