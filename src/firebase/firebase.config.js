// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWRMzPoZRsxw1rccdHt5BxqBBSm_iNgq0",
  authDomain: "dragon-news-server.firebaseapp.com",
  projectId: "dragon-news-server",
  storageBucket: "dragon-news-server.appspot.com",
  messagingSenderId: "842174074305",
  appId: "1:842174074305:web:c60f96a3f4f277709b3340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;