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
  
  document.getElementById("submitbutton").addEventListener("click", function(){



  var username = document.getElementById('username').value;
  var emailaddress = document.getElementById('emailaddress').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var message = document.getElementById('message').value;

    if(username=='' || emailaddress =='' || phonenumber == ''){
        alert('Please enter the credentials');
    }

else{
  var database = firebase.database();

  var ref = database.ref('clientMesssage');

  var data={
        user_name: username,
        email_address:emailaddress,
        phone_number:phonenumber,
        message_client:message
  }

  ref.push(data);

  document.getElementById('username').value = '';
  document.getElementById('emailaddress').value='';
  document.getElementById('phonenumber').value='';
  document.getElementById('message').value='';

  ref.on('value', gotData, errData);

    function gotData(data){
    console.log(data.val());
    }

    function errData(err){
    console.log()
    }
}

})


  
  
  
  
  






