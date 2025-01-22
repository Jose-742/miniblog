
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx8lb6ci7xbKyYXgKXsCND-d66a195lMs",
  authDomain: "miniblog-b96f8.firebaseapp.com",
  projectId: "miniblog-b96f8",
  storageBucket: "miniblog-b96f8.firebasestorage.app",
  messagingSenderId: "1011012445252",
  appId: "1:1011012445252:web:88833c3be130bfe4400811"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };