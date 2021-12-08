import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyASJ_kS8pwfcfUl9Ra0EB7Wls1ioHyaGxE",
    authDomain: "mealstogo-78c2c.firebaseapp.com",
    projectId: "mealstogo-78c2c",
    storageBucket: "mealstogo-78c2c.appspot.com",
    messagingSenderId: "478591598233",
    appId: "1:478591598233:web:66ed6e9169dbbe7b13c208"

};

export const firebase = initializeApp(firebaseConfig);