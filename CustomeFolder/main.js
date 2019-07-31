// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkzJJtLK2BtyvafRBs7bYf4g4c4RcLKxU",
    authDomain: "vmweb-8dbe7.firebaseapp.com",
    databaseURL: "https://vmweb-8dbe7.firebaseio.com",
    projectId: "vmweb-8dbe7",
    storageBucket: "vmweb-8dbe7.appspot.com",
    messagingSenderId: "48259309957"
  };
  firebase.initializeApp(config);


  console.log(firebase)

  document.getElementById("submitbutton").addEventListener("click", function(){
  var username = document.getElementById('username').value;
  var emailaddress = document.getElementById('emailaddress').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var message = document.getElementById('message').value;

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

  })
