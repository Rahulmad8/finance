// Initialize Firebase]
var config = {
    apiKey: "AIzaSyDkzJJtLK2BtyvafRBs7bYf4g4c4RcLKxU",
    authDomain: "vmweb-8dbe7.firebaseapp.com",
    databaseURL: "https://vmweb-8dbe7.firebaseio.com",
    projectId: "vmweb-8dbe7",
    storageBucket: "vmweb-8dbe7.appspot.com",
    messagingSenderId: "48259309957"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
var ref = database.ref('clientMesssage');

ref.on('value', gotData, errData);

function gotData(data){
    var clientMessage = data.val();
    var keys = Object.keys(clientMessage);
    var container = document.getElementById('card-body');
  // console.log(container);
    console.log(keys);
    container.innerHTML += '';
    for (i=0; i<keys.length; i++){
        window.k =keys[i];
        let emailaddress = clientMessage[k].email_address;
        let messageclients= clientMessage[k].message_client;
        let phonenumber= clientMessage[k].phone_number;
        let username= clientMessage[k].user_name;
        console.log(emailaddress);
        container.innerHTML += `<div class="card blog-content"><h1>Title:${username}</h1><h4>${messageclients} </h4>
        <h4>${phonenumber} </h4>
        <h4>${emailaddress} </h4>
        </div>
        `;
    }     
}

function errData(err){
  console.log(err);
}