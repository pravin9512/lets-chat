const firebaseConfig = {
      apiKey: "AIzaSyA5cG00HBBaY5gvjh6eswAgmJSSYnUaEqI",
      authDomain: "kwitter-f56dc.firebaseapp.com",
      databaseURL: "https://kwitter-f56dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-f56dc",
      storageBucket: "kwitter-f56dc.appspot.com",
      messagingSenderId: "897158885690",
      appId: "1:897158885690:web:32d40c048483aedbaf6003"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS
userID=localStorage.getItem("user_key")
room_name=localStorage.getItem("roomkey");

function send(){
      msg=document.getElementById("sendmsg").value;
      firebase.database().ref(room_name).push({
      name:userID,
      message:msg,
      like:0
});
document.getElementById("sendmsg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"]
message=message_data["message"]
like=message_data["like"]
 
name_img="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_btn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_img+message_tag+like_btn+span;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function update_like(message_id){
      btnId=message_id;
      likes=document.getElementById(btnId).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout() {
      localStorage.removeItem("user_key")
      localStorage.removeItem("roomkey")
      window.location="index.html"
}