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

  var database = firebase.database();
  var ref = database.ref('BlogContent');

  ref.on('value', gotData, errData);

  function gotData(data){
      var BlogContent = data.val();
      var keys = Object.keys(BlogContent);
      var container = document.getElementById('blog-container');
    // console.log(container);
      console.log(keys);
      container.innerHTML += '';
      for (i=0; i<keys.length; i++){
          var k =keys[i];
          let body = BlogContent[k].blogBody;
          let title= BlogContent[k].blogtitle;
          console.log(body);
          container.innerHTML += `<div class="card blog-content"><h1>Title:${title}</h1><h4>${body} </h4><p>Post No:${i+1}</p></div>`;
      }     
  }

  function errData(err){
    console.log(err);
  }




  