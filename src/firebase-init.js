import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR-WRRiT3W_qdrWAaJnbHYJF_ZjhGDbo0",
  authDomain: "clone-whatsapp-4632f.firebaseapp.com",
  projectId: "clone-whatsapp-4632f",
  storageBucket: "clone-whatsapp-4632f.firebasestorage.app",
  messagingSenderId: "720920326460",
  appId: "1:720920326460:web:18fddb2d33f139cbb7ae39"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }