function add_user(){
    user_name=document.getElementById("user_id").value;
localStorage.setItem("user_key",user_name);
window.location="kwitter_room.html"
}