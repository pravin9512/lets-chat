
//ADD YOUR FIREBASE LINKS HERE
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
user_name=localStorage.getItem("user_key");
document.getElementById("welcome_user").innerHTML="Welcome "+user_name;

  function addRoom(){
      room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
     });
     localStorage.setItem("roomkey",room_name);
     window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectRoom(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTM+=row;
      //End code
      });});}
getData()

function redirectRoom(name){
      localStorage.setItem("roomkey",name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_key")
      localStorage.removeItem("roomkey")
      window.location="index.html"
}