import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAy7lZzpdeDGcx6vSJdh1_WZ7YrDNzunMo",
    authDomain: "dragon-news-authentication.firebaseapp.com",
    projectId: "dragon-news-authentication",
    storageBucket: "dragon-news-authentication.appspot.com",
    messagingSenderId: "312235132298",
    appId: "1:312235132298:web:79d9ab4d81f0356646f473"
};


const app = initializeApp(firebaseConfig);
export default app;