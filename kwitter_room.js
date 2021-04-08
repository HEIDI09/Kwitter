
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDu1ApN8-qulz5RPf_WBA4jaIngTYfAMZw",
      authDomain: "kwitter-b01a5.firebaseapp.com",
      databaseURL: "https://kwitter-b01a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-b01a5",
      storageBucket: "kwitter-b01a5.appspot.com",
      messagingSenderId: "426842001507",
          appId: "1:426842001507:web:29086d8fb3ae3afb15a856"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function add_room(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}