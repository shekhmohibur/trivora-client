import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwCpxQp9gKCmCurgj4wRbn1qu-RTEY2bg",
  authDomain: "base-auth-1.firebaseapp.com",
  projectId: "base-auth-1",
  storageBucket: "base-auth-1.firebasestorage.app",
  messagingSenderId: "718951217710",
  appId: "1:718951217710:web:8587f9867259ed3455bdbf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
