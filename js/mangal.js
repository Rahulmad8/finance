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
document.getElementById("submitbuttons").addEventListener("click", function(){
    var Musername = document.getElementById('usernames').value;
    var Memailaddress = document.getElementById('emailaddresss').value;
    var Mphonenumber = document.getElementById('phonenumbers').value;
    var Mmessage = document.getElementById('messagess').value;

    if(Musername == ''|| Memailaddress == ''|| Mphonenumber ==''){
        alert("Please Enter the Detail")
    }
  else{
    var database = firebase.database();

    var refs = database.ref('MangalEssakiClient');
  
    var datas={
          user_names: Musername,
          email_addresss:Memailaddress,
          phone_numbers:Mphonenumber,
          message_clients:Mmessage
    }
  
    refs.push(datas);
    document.getElementById('usernames').value = '';
    document.getElementById('emailaddresss').value='';
    document.getElementById('phonenumbers').value='';
    document.getElementById('messagess').value='';
    
  
    refs.on('value', gotData, errData);
  
  function gotData(datas){
      console.log(datas.val());
  }
  
  function errData(err){
      console.log(err)
  }

  }
    

})




