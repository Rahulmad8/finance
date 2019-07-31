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
    var clientdata = data.val();
    var keys = Object.keys(clientdata);
    var container = document.getElementById('client-container');
  // console.log(container);
    console.log(keys);
    container.innerHTML += '';
    for (i=0; i<keys.length; i++){
        var k =keys[i];
        let body = clientdata[k].email_address;
        let title= clientdata[k].blogtitle;
        console.log(body);
        container.innerHTML += `<div class="card blog-content"><h1>Title:${title}</h1><h4>${body} </h4><p>Post No:${i+1}</p></div>`;
    }     
}

function errData(err){
  console.log(err);
}