// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9vh8rdIGfFEwpBBHgpcq9s0gDxvCUGu8",
    authDomain: "vm-finance-5e114.firebaseapp.com",
    databaseURL: "https://vm-finance-5e114.firebaseio.com",
    projectId: "vm-finance-5e114",
    storageBucket: "vm-finance-5e114.appspot.com",
    messagingSenderId: "300655480777"
  };
  firebase.initializeApp(config);
  var username = '';
  var password = '';
console.log(username);
console.log(password)

document.getElementById("submitbutton").addEventListener("click", function(){
  var username = document.getElementById('usernames').value;
  var password = document.getElementById('password').value;


            firebase.auth().signInWithEmailAndPassword(username, password).then(function(firebaseUser) {
                console.log(firebaseUser)
                window.location = '../admin/MainAdmin.html'
            })
            .catch(function(error) {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
                } else {
                alert(errorMessage);
                }
                console.log(error);
            });
            
})

  





