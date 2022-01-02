$(document).ready(function(){
  $("#loginImg").css('display', 'none');
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });
    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });
    $('.login-form ul .signup').click(function(){
      $('.sign-up-form').addClass('popup');
   });
   $('.sign-up-form form .fa-times').click(function(){
      $('.sign-up-form').removeClass('popup');
   });
   $('.login-form form .btn').click(function(event){
    event.preventDefault();
    login() 
   });
    $('.login-form .sign-in-with-google p').click(function(event){
        event.preventDefault();
        signin() 
    });
    $(window).on('load scroll',function(){
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
            $('.login-form').removeClass('popup'); 
            $('section').each(function(){
                let top =$(window).scrollTop();
                let height=$(this).height();
                let id=$(this).attr('id');
                let offset=$(this).offset().top - 200;
                
                if(top > offset && top < offset + height){
                    $('.navbar ul li a').removeClass('active');
                    $('.navbar').find(`[href="#${id}"]`).addClass('active');
                }
            });
    });
});
const firebaseConfig = {
    apiKey: "AIzaSyCtp-MR-gJKz8Qfeyuv4mYLqyJ-D1GdxIw",
    authDomain: "e-learning-platform-f5d7c.firebaseapp.com",
    projectId: "e-learning-platform-f5d7c",
    storageBucket: "e-learning-platform-f5d7c.appspot.com",
    messagingSenderId: "553563438819",
    appId: "1:553563438819:web:67f0f732a4c7240df28fd6",
    measurementId: "G-9WJJ7KFJTR"
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
firebase.analytics();
function signin(){
    console.log("hello")
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => 
    {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("user:",user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });}
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          if(user.uid==="kXeuGluMPxdE3OtYu5kbWZ3DeAS2"){
            signout();
          }
          console.log(user);
          document.getElementById("userName").innerHTML = user.bc.displayName;
          //document.getElementById("login").innerHTML = user.bc.photoURL;
          $( '#loginImg' ).attr( 'src', user.bc.photoURL );
          $("#loginImg").css('display', 'inline');
          $('.sign-up-form').removeClass('popup');
           $('.login-form').removeClass('popup');
          }
        }
      );
function login(){
  var email = document.getElementById("lemail").value;
  var password = document.getElementById("lpassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  }); 
}
/*sign up page commenses*/
function signup(){
  console.log("helo1")
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(userCredential);
    document.getElementById("userName").innerHTML = userCredential;
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
}
document.querySelector("#sign-up-btn").addEventListener("click",signup);
function signout(){
firebase.auth().signOut().then(() => {
  // Sign-out successful.
  $("#loginImg").css('display', 'none');
  console.log("signed_out");
  $('.sign-up-form').removeClass('popup');
  $('.login-form').removeClass('popup');
  document.getElementById("userName").innerHTML = " ";
  
}).catch((error) => {
  // An error happened.

});
}
document.querySelector("#sign-out-btn").addEventListener("click",signout);
