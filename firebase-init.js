  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"
  import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCtp-MR-gJKz8Qfeyuv4mYLqyJ-D1GdxIw",
    authDomain: "e-learning-platform-f5d7c.firebaseapp.com",
    databaseURL: "https://e-learning-platform-f5d7c-default-rtdb.firebaseio.com",
    projectId: "e-learning-platform-f5d7c",
    storageBucket: "e-learning-platform-f5d7c.appspot.com",
    messagingSenderId: "553563438819",
    appId: "1:553563438819:web:67f0f732a4c7240df28fd6",
    measurementId: "G-9WJJ7KFJTR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export{getDatabase,initializeApp,ref,set,get,app,getAuth,signInWithEmailAndPassword,onAuthStateChanged};