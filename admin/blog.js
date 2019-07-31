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

  document.getElementById("blogsubmit").addEventListener("click", function(){
    var title = document.getElementById('blog').value;
    var blogbody = document.getElementById('blogbody').value;
  
    var database = firebase.database();
  
    var ref = database.ref('BlogContent');
  
    var data={
          blogtitle:title,
          blogBody:blogbody
    }
  
    ref.push(data);
  
    document.getElementById('blog').value = '';
    document.getElementById('blogbody').value='';
    })

    // Blog post
    
  



  