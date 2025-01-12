import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtoKL3sis07vkIo1C-JFJWXnacgRQ4vAg",
    authDomain: "discord-react-7963a.firebaseapp.com",
    projectId: "discord-react-7963a",
    storageBucket: "discord-react-7963a.firebasestorage.app",
    messagingSenderId: "669787349136",
    appId: "1:669787349136:web:f542d9e033ff8e73adf815"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };