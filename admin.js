import { getAuth,signInWithEmailAndPassword } from "./firebase-init.js";
const auth = getAuth();
document.querySelector(".btn").addEventListener("click",()=>{
    const email=document.querySelector("#admin-email").value;
    const password=document.querySelector("#admin-password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user.uid==="kXeuGluMPxdE3OtYu5kbWZ3DeAS2"){
        location.href="./form.html";
    }
    else{
        window.location.replace("https://img.devrant.com/devrant/rant/r_1394930_ThKLu.jpg");
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})