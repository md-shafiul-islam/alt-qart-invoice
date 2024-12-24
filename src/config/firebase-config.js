import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUT_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUK,
  messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const fireBaseApp = initializeApp(firebaseConfig);
export default fireBaseApp;
