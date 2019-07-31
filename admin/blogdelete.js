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

var database = firebase.database();
var ref = database.ref('BlogContent');

ref.on('value', gotData, errData);

function gotData(data){
    var BlogContent = data.val();
    var keys = Object.keys(BlogContent);
    var container = document.getElementById('card-body');
  // console.log(container);
    console.log(keys);
    container.innerHTML += '';
    for (i=0; i<keys.length; i++){
        window.k =keys[i];
        let body = BlogContent[k].blogBody;
        let title= BlogContent[k].blogtitle;
        console.log(body);
        container.innerHTML += `<div class="card blog-content"><h1>Title:${title}</h1><h4>${body} </h4><p>Post No:${i+1}</p>
        <button class="btn btn-danger" type="submit" id="delete">Delete the Post</button></div>
        `;
    }     
}

function errData(err){
  console.log(err);
}


document.getElementById("delete").addEventListener("click", function(){
    console.log('delete')
})

document.getElementById("delete").addEventListener("click", function(){
var events = firebase.database().ref('BlogContent');
var query = events.orderByChild(title).equalTo(window.k);
query.on('child_added', function(snapshot) {
    snapshot.ref.remove();
})
})