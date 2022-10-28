import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOIl_lW8kGmXx_1VVSvyx2lv2Fpt6_qhU",
  authDomain: "awsome-chat-e65a1.firebaseapp.com",
  projectId: "awsome-chat-e65a1",
  storageBucket: "awsome-chat-e65a1.appspot.com",
  messagingSenderId: "193692335401",
  appId: "1:193692335401:web:cda8cad5ba8b3d51844b38"
};

export const app =initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
